import { 
  getGoogleSheetsClient, 
  parseBusLogicData, 
  updateSheetData 
} from './_utils.js';

const BUSLOGIC_URL = "https://rt.buslogic.baguette.pirnet.si/beograd_not_gtfs_rt/rt.json";

export default async function handler(request, response) {
  try {
    // Fetch with timeout and proper headers
    const fetchResponse = await fetch(BUSLOGIC_URL, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
      // 10 second timeout
      signal: AbortSignal.timeout(10000)
    });
    
    if (!fetchResponse.ok) {
      throw new Error(`Greška pri preuzimanju podataka: ${fetchResponse.statusText}`);
    }

    // Check response size
    const contentLength = fetchResponse.headers.get('content-length');
    console.log('📦 Očekivana veličina odgovora (bytes):', contentLength);

    // Get as text first to verify complete reception
    const text = await fetchResponse.text();
    console.log('✅ Stvarna veličina primljenog teksta (bytes):', text.length);
    console.log('🔍 Prvi karakteri odgovora:', text.slice(0, 100));
    console.log('🔍 Poslednji karakteri odgovora:', text.slice(-50));

    // Parse JSON
    const jsonData = JSON.parse(text);
    console.log('🚌 Ukupan broj vozila u JSON-u:', jsonData.vehicles?.length || 0);
    
    // Detailed inspection of first few vehicles
    if (jsonData.vehicles && jsonData.vehicles.length > 0) {
      console.log('🔬 Struktura prvog vozila:', JSON.stringify(jsonData.vehicles[0], null, 2));
      
      // Check for line 95 specifically
      const line95Vehicles = jsonData.vehicles.filter(item => {
        const lineNumber = item?.vehicle?.trip?.lineNumber || 
                          item?.vehicle?.trip?.routeId || 
                          item?.vehicle?.trip?.route_id;
        return lineNumber === "95" || lineNumber === 95;
      });
      console.log('🎯 Vozila sa linijom 95 (pre parsiranja):', line95Vehicles.length);
      
      if (line95Vehicles.length > 0) {
        console.log('📋 Primer vozila linije 95:', JSON.stringify(line95Vehicles[0], null, 2));
      }
    }

    const liveVehicles = parseBusLogicData(jsonData);
    console.log('✨ Broj filtriranih vozila za liniju 95 (posle parsiranja):', liveVehicles.length);
    console.log('🎯 Filtrirana vozila:', liveVehicles);
    
    const sheets = await getGoogleSheetsClient();
    
    const { header, rows } = await updateSheetData(sheets, liveVehicles);

    const html = renderHtml(header, rows);

    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=120');
    response.status(200).send(html);

  } catch (error) {
    console.error('❌ Greška:', error);
    console.error('❌ Stack trace:', error.stack);
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
    const timeB = b[2] || "00:00:00";
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
