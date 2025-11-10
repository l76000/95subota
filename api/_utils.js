import { google } from 'googleapis';

export const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
export const SHEET_NAME = 'Sheet1'; 
const FULL_RANGE = `${SHEET_NAME}!A:F`;

export const timetableMapA = {
 "04:45:00": 24,
"05:00:00": 28,
"05:10:00": 30,
"05:20:00": 31,
"05:26:00": 32,
"05:32:00": 1,
"05:38:00": 2,
"05:44:00": 3,
"05:49:00": 4,
"05:55:00": 6,
"06:01:00": 7,
"06:07:00": 8,
"06:13:00": 33,
"06:19:00": 9,
"06:25:00": 10,
"06:30:00": 11,
"06:35:00": 12,
"06:40:00": 13,
"06:45:00": 34,
"06:50:00": 14,
"06:55:00": 15,
"07:00:00": 16,
"07:05:00": 17,
"07:10:00": 18,
"07:15:00": 19,
"07:20:00": 20,
"07:25:00": 21,
"07:30:00": 22,
"07:35:00": 23,
"07:40:00": 24,
"07:45:00": 25,
"07:50:00": 26,
"07:55:00": 27,
"08:01:00": 28,
"08:06:00": 29,
"08:12:00": 30,
"08:17:00": 31,
"08:22:00": 32,
"08:28:00": 1,
"08:33:00": 2,
"08:39:00": 3,
"08:44:00": 4,
"08:49:00": 5,
"08:55:00": 6,
"09:00:00": 7,
"09:06:00": 8,
"09:08:00": 33,
"09:11:00": 9,
"09:17:00": 10,
"09:22:00": 11,
"09:27:00": 12,
"09:33:00": 13,
"09:34:00": 34,
"09:38:00": 14,
"09:44:00": 15,
"09:49:00": 16,
"09:54:00": 17,
"10:00:00": 18,
"10:05:00": 19,
"10:11:00": 20,
"10:16:00": 21,
"10:21:00": 22,
"10:27:00": 23,
"10:32:00": 24,
"10:38:00": 25,
"10:43:00": 26,
"10:48:00": 27,
"10:53:00": 28,
"10:58:00": 29,
"11:03:00": 30,
"11:09:00": 31,
"11:14:00": 32,
"11:19:00": 1,
"11:24:00": 2,
"11:29:00": 3,
"11:34:00": 4,
"11:39:00": 5,
"11:44:00": 6,
"11:50:00": 7,
"11:55:00": 8,
"12:00:00": 9,
"12:05:00": 10,
"12:10:00": 11,
"12:15:00": 12,
"12:20:00": 13,
"12:25:00": 33,
"12:30:00": 14,
"12:36:00": 15,
"12:41:00": 16,
"12:47:00": 17,
"12:52:00": 18,
"12:57:00": 19,
"13:03:00": 20,
"13:08:00": 21,
"13:13:00": 34,
"13:19:00": 22,
"13:24:00": 23,
"13:29:00": 24,
"13:34:00": 25,
"13:40:00": 26,
"13:45:00": 27,
"13:50:00": 28,
"13:56:00": 29,
"14:01:00": 30,
"14:06:00": 31,
"14:12:00": 32,
"14:17:00": 35,
"14:22:00": 1,
"14:28:00": 2,
"14:33:00": 3,
"14:38:00": 4,
"14:44:00": 5,
"14:49:00": 6,
"14:54:00": 7,
"14:59:00": 8,
"15:05:00": 9,
"15:10:00": 10,
"15:15:00": 11,
"15:21:00": 12,
"15:26:00": 13,
"15:31:00": 33,
"15:37:00": 14,
"15:43:00": 15,
"15:48:00": 16,
"15:53:00": 17,
"15:59:00": 18,
"16:04:00": 19,
"16:10:00": 20,
"16:15:00": 21,
"16:21:00": 34,
"16:26:00": 22,
"16:32:00": 23,
"16:37:00": 24,
"16:43:00": 25,
"16:48:00": 26,
"16:54:00": 27,
"16:59:00": 28,
"17:05:00": 29,
"17:10:00": 30,
"17:16:00": 31,
"17:21:00": 32,
"17:27:00": 35,
"17:32:00": 1,
"17:38:00": 2,
"17:43:00": 3,
"17:49:00": 4,
"17:54:00": 5,
"18:00:00": 6,
"18:05:00": 7,
"18:11:00": 8,
"18:16:00": 9,
"18:22:00": 10,
"18:27:00": 11,
"18:33:00": 12,
"18:38:00": 13,
"18:40:00": 33,
"18:44:00": 14,
"18:49:00": 15,
"18:55:00": 16,
"19:01:00": 17,
"19:07:00": 18,
"19:13:00": 19,
"19:19:00": 20,
"19:25:00": 34,
"19:28:00": 22,
"19:31:00": 23,
"19:37:00": 24,
"19:43:00": 25,
"19:50:00": 27,
"19:54:00": 28,
"19:57:00": 30,
"20:02:00": 31,
"20:05:00": 32,
"20:13:00": 1,
"20:21:00": 2,
"20:24:00": 3,
"20:29:00": 4,
"20:37:00": 6,
"20:45:00": 7,
"20:49:00": 8,
"20:53:00": 9,
"21:01:00": 10,
"21:05:00": 11,
"21:08:00": 12,
"21:09:00": 13,
"21:17:00": 14,
"21:25:00": 16,
"21:33:00": 17,
"21:36:00": 18,
"21:41:00": 19,
"21:49:00": 20,
"21:57:00": 34,
"22:05:00": 24,
"22:17:00": 25,
"22:29:00": 27,
"22:35:00": 30,
"22:41:00": 32,
"22:53:00": 1,
"22:58:00": 2,
"23:05:00": 4,
"23:17:00": 6,
"23:30:00": 7,
"23:35:00": 10,
"23:45:00": 14,
"23:53:00": 16,
"00:00:00": 17,
"00:05:00": 19,
"00:20:00": 20,
"00:35:00": 24,
};

export const timetableMapB = {
"04:00:00": 1,
"04:20:00": 4,
"04:35:00": 7,
"04:50:00": 9,
"05:05:00": 13,
"05:17:00": 14,
"05:26:00": 15,
"05:33:00": 16,
"05:39:00": 17,
"05:44:00": 19,
"05:50:00": 21,
"05:56:00": 22,
"06:01:00": 23,
"06:07:00": 24,
"06:12:00": 25,
"06:18:00": 26,
"06:23:00": 27,
"06:29:00": 28,
"06:34:00": 29,
"06:39:00": 30,
"06:44:00": 31,
"06:50:00": 32,
"06:55:00": 1,
"07:00:00": 2,
"07:06:00": 3,
"07:11:00": 4,
"07:16:00": 5,
"07:22:00": 6,
"07:27:00": 7,
"07:32:00": 8,
"07:37:00": 33,
"07:43:00": 9,
"07:48:00": 10,
"07:53:00": 11,
"07:59:00": 12,
"08:04:00": 13,
"08:09:00": 34,
"08:14:00": 14,
"08:20:00": 15,
"08:25:00": 16,
"08:30:00": 17,
"08:36:00": 18,
"08:41:00": 19,
"08:46:00": 20,
"08:52:00": 21,
"08:57:00": 22,
"09:02:00": 23,
"09:07:00": 24,
"09:13:00": 25,
"09:18:00": 26,
"09:23:00": 27,
"09:29:00": 28,
"09:34:00": 29,
"09:40:00": 30,
"09:45:00": 31,
"09:50:00": 32,
"09:56:00": 1,
"10:01:00": 2,
"10:07:00": 3,
"10:12:00": 4,
"10:17:00": 5,
"10:23:00": 6,
"10:28:00": 7,
"10:34:00": 8,
"10:39:00": 9,
"10:45:00": 10,
"10:50:00": 11,
"10:55:00": 12,
"11:01:00": 13,
"11:06:00": 14,
"11:12:00": 15,
"11:17:00": 16,
"11:22:00": 17,
"11:27:00": 18,
"11:33:00": 19,
"11:38:00": 20,
"11:43:00": 21,
"11:49:00": 22,
"11:54:00": 23,
"11:59:00": 24,
"12:05:00": 25,
"12:10:00": 26,
"12:15:00": 27,
"12:21:00": 28,
"12:26:00": 29,
"12:31:00": 30,
"12:37:00": 31,
"12:42:00": 32,
"12:47:00": 35,
"12:53:00": 1,
"12:58:00": 2,
"13:03:00": 3,
"13:08:00": 4,
"13:14:00": 5,
"13:19:00": 6,
"13:24:00": 7,
"13:30:00": 8,
"13:35:00": 9,
"13:40:00": 10,
"13:46:00": 11,
"13:51:00": 12,
"13:56:00": 13,
"14:02:00": 33,
"14:07:00": 14,
"14:12:00": 15,
"14:18:00": 16,
"14:23:00": 17,
"14:28:00": 18,
"14:34:00": 19,
"14:39:00": 20,
"14:45:00": 21,
"14:50:00": 34,
"14:55:00": 22,
"15:01:00": 23,
"15:06:00": 24,
"15:12:00": 25,
"15:17:00": 26,
"15:23:00": 27,
"15:28:00": 28,
"15:33:00": 29,
"15:39:00": 30,
"15:44:00": 31,
"15:50:00": 32,
"15:55:00": 35,
"16:01:00": 1,
"16:06:00": 2,
"16:11:00": 3,
"16:17:00": 4,
"16:22:00": 5,
"16:28:00": 6,
"16:33:00": 7,
"16:39:00": 8,
"16:44:00": 9,
"16:49:00": 10,
"16:55:00": 11,
"17:00:00": 12,
"17:06:00": 13,
"17:11:00": 33,
"17:17:00": 14,
"17:22:00": 15,
"17:27:00": 16,
"17:33:00": 17,
"17:38:00": 18,
"17:44:00": 19,
"17:50:00": 20,
"17:55:00": 34,
"18:01:00": 22,
"18:07:00": 23,
"18:12:00": 24,
"18:18:00": 25,
"18:19:00": 26,
"18:23:00": 27,
"18:29:00": 28,
"18:30:00": 29,
"18:35:00": 30,
"18:40:00": 31,
"18:46:00": 32,
"18:49:00": 35,
"18:52:00": 1,
"18:58:00": 2,
"19:03:00": 3,
"19:09:00": 4,
"19:14:00": 5,
"19:15:00": 6,
"19:21:00": 7,
"19:27:00": 8,
"19:33:00": 9,
"19:39:00": 10,
"19:44:00": 11,
"19:50:00": 12,
"19:56:00": 13,
"20:01:00": 15,
"20:02:00": 14,
"20:08:00": 16,
"20:15:00": 17,
"20:22:00": 18,
"20:30:00": 19,
"20:38:00": 20,
"20:46:00": 34,
"20:48:00": 23,
"20:54:00": 24,
"21:02:00": 25,
"21:10:00": 27,
"21:18:00": 32,
"22:00:00": 6,
"22:09:00": 7,
"22:14:00": 9,
"22:18:00": 10,
"22:20:00": 13,
"22:27:00": 14,
"22:36:00": 16,
"22:45:00": 17,
"22:55:00": 19,
"23:10:00": 20,
"23:13:00": 34,
"23:25:00": 24,
"23:28:00": 25,
"23:39:00": 27,
"23:51:00": 32
};

export async function getGoogleSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const authClient = await auth.getClient();
  return google.sheets({ version: 'v4', auth: authClient });
}

export function parseBusLogicData(data) {
  if (!Array.isArray(data)) {
    return [];
  }

  // Mapa koja čuva trenutno stanje po broju polaska
  // Ključ je brojPolaska, vrednost je POSLEDNJE viđeno vozilo i vreme
  const currentVehiclesByBrojPolaska = new Map();

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    
    const trip = item?.vehicle?.trip;
    const vehicle = item?.vehicle?.vehicle;
    
    if (!trip || !vehicle || trip.lineNumber !== "95") {
      continue;
    }
    
    const tripId = trip.tripId;
    if (!tripId) continue;
    
    const tripIdStr = String(tripId);
    if (!tripIdStr.startsWith('8170') && !tripIdStr.startsWith('8171')) {
      continue;
    }
    
    const vehicleId = vehicle.id;
    if (!vehicleId || !String(vehicleId).startsWith('P9')) {
      continue;
    }
    
    const startTime = trip.startTime;
    if (!startTime) continue;
    
    const directionPrefix = tripIdStr.split('_')[0];
    const mapToUse = directionPrefix === '8170' ? timetableMapA : timetableMapB;
    
    const brojPolaska = mapToUse[startTime];
    if (!brojPolaska) continue;
    
    const vozilo = String(vehicleId).substring(2);
    
    // Sačuvaj ili ažuriraj poslednje stanje za ovaj broj polaska
    const existing = currentVehiclesByBrojPolaska.get(brojPolaska);
    
    if (!existing) {
      // Prvi put vidimo ovaj broj polaska
      currentVehiclesByBrojPolaska.set(brojPolaska, {
        brojPolaska,
        vozilo,
        vreme: startTime
      });
    } else {
      // Već postoji - uporedi vreme i zadrži POSLEDNJI polazak (najkasnije vreme)
      if (startTime > existing.vreme) {
        currentVehiclesByBrojPolaska.set(brojPolaska, {
          brojPolaska,
          vozilo,
          vreme: startTime
        });
      }
    }
  }

  // Vrati samo jedinstvene brojeve polazaka
  return Array.from(currentVehiclesByBrojPolaska.values());
}

export async function updateSheetData(sheets, liveVehicles) {
  console.log('📝 updateSheetData() started');
  
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: FULL_RANGE,
  });

  const rows = res.data.values || [];
  const header = rows.shift() || ["Brojpolaska", "Vozilo", "Vremepolaska", "Zamena 1", "Zamena 2", "Zamena 3"];

  // Učitaj postojeće stanje sheet-a
  // Ključ je SAMO brojPolaska (jer je jedinstven)
  const sheetState = new Map();
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const brojPolaska = row[0];
    
    if (brojPolaska) {
      sheetState.set(String(brojPolaska), {
        rowIndex: i + 2, 
        brojPolaska: row[0],
        vozilo: row[1],
        vreme: row[2],
        zamena1: row[3] || null,
        zamena2: row[4] || null,
        zamena3: row[5] || null,
      });
    }
  }

  console.log(`📋 Učitano ${sheetState.size} redova iz sheet-a`);

  const updateRequests = [];
  const appendRequests = [];

  for (const vehicle of liveVehicles) {
    const existingEntry = sheetState.get(String(vehicle.brojPolaska));
    const novoVozilo = vehicle.vozilo;

    console.log(`\n🔍 Obrađujem: Broj Polaska ${vehicle.brojPolaska}, Vozilo ${novoVozilo}, Vreme ${vehicle.vreme}`);

    if (!existingEntry) {
      // Nema tog broja polaska u sheet-u, dodaj novi red
      appendRequests.push([
        vehicle.brojPolaska,
        novoVozilo,
        vehicle.vreme,
        "", "", ""
      ]);
      
      sheetState.set(String(vehicle.brojPolaska), { 
        rowIndex: -1, 
        brojPolaska: vehicle.brojPolaska,
        vozilo: novoVozilo,
        vreme: vehicle.vreme
      });
      
      console.log(`  ➕ Dodajem novi red za polazak ${vehicle.brojPolaska}`);
    } else {
      // Red postoji za ovaj broj polaska
      const { rowIndex, vozilo, vreme, zamena1, zamena2, zamena3 } = existingEntry;
      
      // Prvo ažuriraj vreme ako je novo vreme kasnije
      if (vehicle.vreme !== vreme) {
        updateRequests.push({
          range: `${SHEET_NAME}!C${rowIndex}`,
          values: [[vehicle.vreme]],
        });
        console.log(`  🕐 Ažuriram vreme: ${vreme} → ${vehicle.vreme}`);
      }
      
      // Poslednje poznato vozilo
      const lastKnownVehicle = zamena3 || zamena2 || zamena1 || vozilo;
      
      console.log(`  📌 Originalno vozilo: ${vozilo}`);
      console.log(`  📌 Poslednje poznato: ${lastKnownVehicle}`);
      console.log(`  📌 Novo vozilo: ${novoVozilo}`);

      if (lastKnownVehicle !== novoVozilo) {
        // Vozilo se promenilo, dodaj u sledeću slobodnu zamenu
        let updateColumn = null;
        if (!zamena1) {
          updateColumn = 'D';
          console.log(`  🔄 Vozilo se promenilo! Dodajem u Zamena 1`);
        } else if (!zamena2) {
          updateColumn = 'E';
          console.log(`  🔄 Vozilo se promenilo! Dodajem u Zamena 2`);
        } else if (!zamena3) {
          updateColumn = 'F';
          console.log(`  🔄 Vozilo se promenilo! Dodajem u Zamena 3`);
        } else {
          console.log(`  ⚠️ Sve zamene su popunjene`);
        }

        if (updateColumn) {
          updateRequests.push({
            range: `${SHEET_NAME}!${updateColumn}${rowIndex}`,
            values: [[novoVozilo]],
          });
          
          // Ažuriraj lokalno stanje
          if (updateColumn === 'D') existingEntry.zamena1 = novoVozilo;
          else if (updateColumn === 'E') existingEntry.zamena2 = novoVozilo;
          else if (updateColumn === 'F') existingEntry.zamena3 = novoVozilo;
        }
      } else {
        console.log(`  ✅ Vozilo je isto, ne menjam ništa`);
      }
    }
  }

  console.log(`\n📊 Rezultat: ${appendRequests.length} novih redova, ${updateRequests.length} ažuriranja`);

  if (appendRequests.length > 0) {
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:F`,
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: appendRequests,
      },
    });
  }

  if (updateRequests.length > 0) {
    await sheets.spreadsheets.values.batchUpdate({
      spreadsheetId: SPREADSHEET_ID,
      resource: {
        valueInputOption: 'USER_ENTERED',
        data: updateRequests,
      },
    });
  }

  // Učitaj finalno stanje
  const finalRes = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: FULL_RANGE,
  });
  
  const finalRows = finalRes.data.values || [];
  if (finalRows.length > 0) finalRows.shift(); 
  
  return { header, rows: finalRows };
}
