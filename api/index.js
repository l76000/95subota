import { 
  getGoogleSheetsClient, 
  parseBusLogicData, 
  updateSheetData,
  SPREADSHEET_ID,
  SHEET_NAME
} from './_utils.js';

const BUSLOGIC_URL = "https://rt.buslogic.baguette.pirnet.si/beograd_not_gtfs_rt/rt.json";

// Čuvaj poslednji datum kada je sheet bio očišćen
let lastResetDate = null;

async function checkAndResetSheet(sheets) {
  const now = new Date();
  const belgradeDateString = now.toLocaleString('en-US', { timeZone: 'Europe/Belgrade' });
  const belgradeDate = new Date(belgradeDateString);
  
  const hour = belgradeDate.getHours();
  const minute = belgradeDate.getMinutes();
  const currentDate = belgradeDate.toLocaleDateString('sr-RS');
  
  console.log(`📅 Trenutni datum u Beogradu: ${currentDate}`);
  console.log(`⏰ Trenutno vreme u Beogradu: ${hour}:${minute.toString().padStart(2, '0')}`);
  console.log(`📅 Poslednji reset: ${lastResetDate || 'nikada'}`);
  
  // Proveri da li je trenutno vreme između 02:00 i 02:59
  const isResetTime = (hour === 2);
  
  if (isResetTime && lastResetDate !== currentDate) {
    console.log('🔄 VREME ZA RESET (02:00-02:59) I NOVI DAN! Čistim sheet...');
    
    try {
      // Obriši sve redove osim header-a
      await sheets.spreadsheets.values.clear({
        spreadsheetId: SPREADSHEET_ID,
        range: `${SHEET_NAME}!A2:F`,
      });
      
      console.log('✅ Sheet uspešno očišćen za novi dan!');
      lastResetDate = currentDate;
      
      return true;
    } catch (error) {
      console.error('❌ Greška pri čišćenju sheet-a:', error);
      return false;
    }
  } else if (isResetTime && lastResetDate === currentDate) {
    console.log('✅ Sheet je već resetovan danas u 2:00');
    return false;
  } else if (!isResetTime && lastResetDate !== currentDate) {
    console.log(`⏰ Nije još vreme za reset (čeka se 02:00, sada je ${hour}:${minute.toString().padStart(2, '0')})`);
    return false;
  } else {
    console.log('✅ Sve OK, nastavlja se normalan rad');
    return false;
  }
}

export default async function handler(request, response) {
  try {
    console.log('🚀 START: Započinjem preuzimanje podataka...');
    
    const fetchResponse = await fetch(BUSLOGIC_URL, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
      signal: AbortSignal.timeout(10000)
    });
    
    if (!fetchResponse.ok) {
      throw new Error(`Greška pri preuzimanju podataka: ${fetchResponse.statusText}`);
    }

    const jsonData = await fetchResponse.json();
    
    if (Array.isArray(jsonData)) {
      console.log('✅ JSON je NIZ sa', jsonData.length, 'vozila');
    }
    
    const liveVehicles = parseBusLogicData(jsonData);
    console.log('✨ parseBusLogicData vratio:', liveVehicles.length, 'vozila');
    
    const sheets = await getGoogleSheetsClient();
    
    // PROVERA I RESETOVANJE SHEET-a u 2:00
    await checkAndResetSheet(sheets);
    
    const { header, rows } = await updateSheetData(sheets, liveVehicles);

    const html = renderHtml(header, rows);

    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=120');
    response.status(200).send(html);

  } catch (error) {
    console.error('❌ GREŠKA:', error);
    response.status(500).send(`<h1>Došlo je do greške</h1><p>${error.message}</p>`);
  }
}

function renderHtml(header, rows) {
  rows.sort((a, b) => {
    const numA = parseInt(a[0], 10);
    const numB = parseInt(b[0], 10);
    
    if (numA !== numB) {
      return numA - numB;
    }
    
    const timeA = a[2] || "00:00:00";
    const timeB = a[2] || "00:00:00";
    return timeA.localeCompare(timeB);
  });

  let tableRows = '';
  for (const row of rows) {
    tableRows += '<tr>';
    tableRows += `<td>${row[0] || ''}</td>`; 
    tableRows += `<td>${row[1] || ''}</td>`; 
    tableRows += `<td>${row[2] || ''}</td>`; 
    tableRows += `<td>${row[3] || ''}</td>`; 
    tableRows += `<td>${row[4] || ''}</td>`; 
    tableRows += `<td>${row[5] || ''}</td>`; 
    tableRows += '</tr>\n';
  }

  return `
<!DOCTYPE html>
<html lang="sr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Linija 95 - Praćenje</title>
    <meta http-equiv="refresh" content="60">
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <h1>Praćenje vozila na liniji 95</h1>
    <p>Ažurirano: ${new Date().toLocaleString('sr-RS')}</p>
    <table>
        <thead>
            <tr>
                <th>${header[0] || 'Broj Polaska'}</th>
                <th>${header[1] || 'Vozilo'}</th>
                <th>${header[2] || 'Vreme Polaska'}</th>
                <th>${header[3] || 'Zamena 1'}</th>
                <th>${header[4] || 'Zamena 2'}</th>
                <th>${header[5] || 'Zamena 3'}</th>
            </tr>
        </thead>
        <tbody>
            ${tableRows}
        </tbody>
    </table>
</body>
</html>
  `;
}
