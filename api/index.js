import { 
  getGoogleSheetsClient, 
  parseBusLogicData, 
  updateSheetData 
} from './_utils.js';

const BUSLOGIC_URL = "https://rt.buslogic.baguette.pirnet.si/beograd_not_gtfs_rt/rt.json";

export default async function handler(request, response) {
  try {
    console.log('🚀 START: Započinjem preuzimanje podataka...');
    
    // Fetch with timeout and proper headers
    const fetchResponse = await fetch(BUSLOGIC_URL, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
      signal: AbortSignal.timeout(10000)
    });
    
    console.log('📡 Response status:', fetchResponse.status);
    console.log('📡 Response statusText:', fetchResponse.statusText);
    console.log('📡 Response headers:', Object.fromEntries(fetchResponse.headers.entries()));
    
    if (!fetchResponse.ok) {
      throw new Error(`Greška pri preuzimanju podataka: ${fetchResponse.statusText}`);
    }

    // Check response size
    const contentLength = fetchResponse.headers.get('content-length');
    console.log('📦 Content-Length header:', contentLength);

    // Get as text first to verify complete reception
    const text = await fetchResponse.text();
    console.log('✅ Primljen tekst - dužina:', text.length, 'karaktera');
    console.log('🔍 Prvih 200 karaktera:', text.slice(0, 200));
    console.log('🔍 Poslednjih 200 karaktera:', text.slice(-200));
    
    // Check if it's valid JSON by looking at start and end
    const startsWithBrace = text.trim().startsWith('{');
    const endsWithBrace = text.trim().endsWith('}');
    console.log('🔍 Počinje sa {:', startsWithBrace);
    console.log('🔍 Završava sa }:', endsWithBrace);

    // Parse JSON
    console.log('🔄 Pokušavam parsiranje JSON-a...');
    const jsonData = JSON.parse(text);
    console.log('✅ JSON uspešno parsiran!');
    
    // Log top-level keys
    console.log('🔑 Top-level ključevi u JSON-u:', Object.keys(jsonData));
    
    // Check vehicles array
    if (jsonData.vehicles) {
      console.log('🚌 vehicles je array:', Array.isArray(jsonData.vehicles));
      console.log('🚌 Ukupan broj vozila u JSON-u:', jsonData.vehicles.length);
      
      if (jsonData.vehicles.length > 0) {
        // Log first vehicle completely
        console.log('🔬 PRVO VOZILO - KOMPLETAN OBJEKAT:');
        console.log(JSON.stringify(jsonData.vehicles[0], null, 2));
        
        // Log first 5 vehicles with line numbers
        console.log('🔬 PRVIH 5 VOZILA - OSNOVNE INFORMACIJE:');
        for (let i = 0; i < Math.min(5, jsonData.vehicles.length); i++) {
          const v = jsonData.vehicles[i];
          const trip = v?.vehicle?.trip;
          const vehicle = v?.vehicle?.vehicle;
          console.log(`Vozilo ${i + 1}:`, {
            lineNumber: trip?.lineNumber,
            routeId: trip?.routeId,
            route_id: trip?.route_id,
            lineId: trip?.lineId,
            tripId: trip?.tripId || trip?.trip_id,
            vehicleId: vehicle?.id || vehicle?.label
          });
        }
        
        // Search for ANY vehicle with "95" anywhere
        console.log('🔍 TRAŽIM VOZILA SA "95" U BILO KOM POLJU...');
        const anyWith95 = jsonData.vehicles.filter((v, index) => {
          const str = JSON.stringify(v).toLowerCase();
          const has95 = str.includes('"95"') || str.includes(':"95"') || str.includes(':95');
          if (has95 && index < 3) {
            console.log(`✨ Našao vozilo sa "95" na poziciji ${index}:`, JSON.stringify(v, null, 2));
          }
          return has95;
        });
        console.log('🎯 Ukupno vozila koja sadrže "95":', anyWith95.length);
        
        // Check specific line number patterns
        const lineNumberChecks = {
          'trip.lineNumber': 0,
          'trip.routeId': 0,
          'trip.route_id': 0,
          'trip.lineId': 0,
          'trip.line_id': 0
        };
        
        jsonData.vehicles.forEach(v => {
          const trip = v?.vehicle?.trip;
          if (trip?.lineNumber === "95" || trip?.lineNumber === 95) lineNumberChecks['trip.lineNumber']++;
          if (trip?.routeId === "95" || trip?.routeId === 95) lineNumberChecks['trip.routeId']++;
          if (trip?.route_id === "95" || trip?.route_id === 95) lineNumberChecks['trip.route_id']++;
          if (trip?.lineId === "95" || trip?.lineId === 95) lineNumberChecks['trip.lineId']++;
          if (trip?.line_id === "95" || trip?.line_id === 95) lineNumberChecks['trip.line_id']++;
        });
        
        console.log('📊 PROVERA RAZLIČITIH POLJA ZA LINIJU 95:');
        console.log(lineNumberChecks);
      }
    } else {
      console.log('❌ jsonData.vehicles ne postoji!');
      console.log('❌ Dostupni ključevi:', Object.keys(jsonData));
    }

    console.log('🔄 Pozivam parseBusLogicData funkciju...');
    const liveVehicles = parseBusLogicData(jsonData);
    console.log('✨ parseBusLogicData vratio:', liveVehicles.length, 'vozila');
    console.log('🎯 Filtrirana vozila:', liveVehicles);
    
    const sheets = await getGoogleSheetsClient();
    
    const { header, rows } = await updateSheetData(sheets, liveVehicles);

    const html = renderHtml(header, rows);

    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=120');
    response.status(200).send(html);

  } catch (error) {
    console.error('❌ GREŠKA:', error);
    console.error('❌ Stack trace:', error.stack);
    console.error('❌ Error name:', error.name);
    console.error('❌ Error message:', error.message);
    response.status(500).send(`<h1>Došlo je do greške</h1><p>${error.message}</p><pre>${error.stack}</pre>`);
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
