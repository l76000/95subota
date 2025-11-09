import { google } from 'googleapis';

export const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
export const SHEET_NAME = 'Sheet1'; 
const FULL_RANGE = `${SHEET_NAME}!A:F`;

export const timetableMapA = {
 "04:45:00": 18,

"05:05:00": 1,
"05:25:00": 5,
"05:45:00": 8,

"06:01:00": 10,
"06:16:00": 12,
"06:27:00": 13,
"06:37:00": 15,
"06:45:00": 16,
"06:53:00": 17,

"07:01:00": 18,
"07:09:00": 1,
"07:17:00": 2,
"07:25:00": 3,
"07:33:00": 4,
"07:41:00": 5,
"07:49:00": 6,
"07:57:00": 7,

"08:05:00": 8,
"08:13:00": 9,
"08:21:00": 10,
"08:29:00": 11,
"08:37:00": 12,
"08:45:00": 13,
"08:53:00": 14,

"09:01:00": 15,
"09:10:00": 16,
"09:19:00": 17,
"09:28:00": 18,
"09:36:00": 1,
"09:45:00": 2,
"09:54:00": 3,

"10:03:00": 4,
"10:12:00": 5,
"10:21:00": 6,
"10:30:00": 7,
"10:39:00": 8,
"10:48:00": 9,
"10:56:00": 10,

"11:05:00": 11,
"11:14:00": 12,
"11:23:00": 13,
"11:32:00": 14,
"11:41:00": 15,
"11:50:00": 16,
"11:59:00": 17,

"12:08:00": 18,
"12:16:00": 1,
"12:25:00": 2,
"12:34:00": 3,
"12:43:00": 4,
"12:52:00": 5,

"13:01:00": 6,
"13:10:00": 7,
"13:19:00": 8,
"13:28:00": 9,
"13:36:00": 10,
"13:45:00": 11,
"13:54:00": 12,

"14:03:00": 13,
"14:12:00": 14,
"14:21:00": 15,
"14:30:00": 16,
"14:39:00": 17,
"14:48:00": 18,
"14:56:00": 1,

"15:05:00": 2,
"15:14:00": 3,
"15:23:00": 4,
"15:32:00": 5,
"15:41:00": 6,
"15:50:00": 7,
"15:59:00": 8,

"16:08:00": 9,
"16:16:00": 10,
"16:25:00": 11,
"16:34:00": 12,
"16:43:00": 13,
"16:52:00": 14,

"17:01:00": 15,
"17:10:00": 16,
"17:19:00": 17,
"17:28:00": 18,
"17:36:00": 1,
"17:45:00": 2,
"17:54:00": 3,

"18:03:00": 4,
"18:12:00": 5,
"18:21:00": 6,
"18:30:00": 7,
"18:39:00": 8,
"18:48:00": 9,
"18:56:00": 10,

"19:05:00": 11,
"19:14:00": 12,
"19:23:00": 13,
"19:32:00": 14,
"19:36:00": 15,
"19:41:00": 16,
"19:50:00": 17,
"19:59:00": 18,

"20:08:00": 1,
"20:17:00": 2,
"20:27:00": 3,
"20:37:00": 4,
"20:48:00": 5,
"20:59:00": 6,

"21:10:00": 7,
"21:21:00": 8,
"21:32:00": 10,
"21:43:00": 12,
"21:54:00": 13,

"22:06:00": 16,
"22:19:00": 17,
"22:20:00": 18,
"22:33:00": 1,
"22:47:00": 3,
"22:57:00": 4,

"23:01:00": 5,
"23:15:00": 6,
"23:30:00": 7,
"23:45:00": 10,

"00:00:00": 13,
"00:20:00": 16

};

export const timetableMapB = {
 "04:00:00": 1,
"04:25:00": 5,
"04:45:00": 8,

"05:02:00": 10,
"05:19:00": 13,
"05:35:00": 16,
"05:50:00": 18,

"06:04:00": 1,
"06:18:00": 3,
"06:31:00": 5,
"06:40:00": 6,
"06:49:00": 8,
"06:57:00": 9,

"07:05:00": 10,
"07:13:00": 11,
"07:21:00": 12,
"07:29:00": 13,
"07:37:00": 14,
"07:45:00": 15,
"07:54:00": 16,

"08:03:00": 17,
"08:11:00": 18,
"08:20:00": 1,
"08:29:00": 2,
"08:37:00": 3,
"08:46:00": 4,
"08:55:00": 5,

"09:03:00": 6,
"09:12:00": 7,
"09:20:00": 8,
"09:29:00": 9,
"09:38:00": 10,
"09:46:00": 11,
"09:55:00": 12,

"10:03:00": 13,
"10:12:00": 14,
"10:21:00": 15,
"10:30:00": 16,
"10:39:00": 17,
"10:48:00": 18,
"10:56:00": 1,

"11:05:00": 2,
"11:14:00": 3,
"11:23:00": 4,
"11:32:00": 5,
"11:41:00": 6,
"11:50:00": 7,
"11:59:00": 8,

"12:08:00": 9,
"12:16:00": 10,
"12:25:00": 11,
"12:34:00": 12,
"12:43:00": 13,
"12:52:00": 14,

"13:01:00": 15,
"13:10:00": 16,
"13:19:00": 17,
"13:28:00": 18,
"13:36:00": 1,
"13:45:00": 2,
"13:54:00": 3,

"14:03:00": 4,
"14:12:00": 5,
"14:21:00": 6,
"14:30:00": 7,
"14:39:00": 8,
"14:48:00": 9,
"14:56:00": 10,

"15:05:00": 11,
"15:14:00": 12,
"15:23:00": 13,
"15:32:00": 14,
"15:41:00": 15,
"15:50:00": 16,
"15:59:00": 17,

"16:08:00": 18,
"16:16:00": 1,
"16:25:00": 2,
"16:34:00": 3,
"16:43:00": 4,
"16:52:00": 5,

"17:01:00": 6,
"17:10:00": 7,
"17:19:00": 8,
"17:28:00": 9,
"17:36:00": 10,
"17:45:00": 11,
"17:54:00": 12,

"18:03:00": 13,
"18:12:00": 14,
"18:21:00": 15,
"18:30:00": 16,
"18:39:00": 17,
"18:48:00": 18,
"18:56:00": 1,

"19:05:00": 2,
"19:14:00": 3,
"19:23:00": 4,
"19:33:00": 5,
"19:43:00": 6,
"19:53:00": 7,

"20:03:00": 8,
"20:14:00": 9,
"20:15:00": 10,
"20:25:00": 11,
"20:36:00": 12,
"20:42:00": 13,
"20:47:00": 14,
"20:58:00": 16,
"20:58:00": 17,

"21:09:00": 18,
"21:20:00": 1,
"21:27:00": 2,
"21:32:00": 3,
"21:44:00": 4,
"21:56:00": 5,

"22:10:00": 6,
"22:25:00": 7,
"22:26:00": 8,
"22:41:00": 10,
"22:47:00": 12,
"22:57:00": 13,

"23:15:00": 16,
"23:24:00": 17,
"23:38:00": 1,
"23:52:00": 3,

"00:06:00": 5,
"00:20:00": 6,
"00:35:00": 7,
"00:50:00": 10,

"01:05:00": 13

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
  console.log('🔧 parseBusLogicData() pozvana');
  
  if (!data) {
    console.log('❌ data je null ili undefined');
    return [];
  }
  
  if (!data.vehicles) {
    console.log('❌ data.vehicles ne postoji');
    console.log('❌ Dostupni ključevi u data:', Object.keys(data));
    return [];
  }

  if (!Array.isArray(data.vehicles)) {
    console.log('❌ data.vehicles NIJE niz!');
    console.log('❌ Tip data.vehicles:', typeof data.vehicles);
    return [];
  }

  console.log('✅ data.vehicles je niz sa', data.vehicles.length, 'elemenata');

  const liveVehicles = [];
  let totalProcessed = 0;
  let line95Count = 0;
  let failedTripIdCheck = 0;
  let failedVehicleIdCheck = 0;
  let failedRouteIdCheck = 0;
  let failedTimetableCheck = 0;

  for (const item of data.vehicles) {
    try {
      totalProcessed++;
      
      // The structure is: item.vehicle.trip and item.vehicle.vehicle
      const trip = item?.vehicle?.trip;
      const vehicle = item?.vehicle?.vehicle;

      // Log first 3 items for debugging
      if (totalProcessed <= 3) {
        console.log(`\n🔬 VOZILO #${totalProcessed}:`);
        console.log('  trip:', JSON.stringify(trip, null, 2));
        console.log('  vehicle:', JSON.stringify(vehicle, null, 2));
      }

      if (!trip || !vehicle) {
        if (totalProcessed <= 3) {
          console.log(`  ❌ Preskačem - nema trip (${!!trip}) ili vehicle (${!!vehicle})`);
        }
        continue;
      }

      // First check: lineNumber must be "95"
      const lineNumber = trip.lineNumber;
      
      if (totalProcessed <= 3) {
        console.log(`  🔍 lineNumber:`, lineNumber);
      }
      
      if (lineNumber !== "95" && lineNumber !== 95 && String(lineNumber) !== "95") {
        if (totalProcessed <= 3) {
          console.log(`  ❌ Nije linija 95 (vrednost: ${lineNumber})`);
        }
        continue;
      }

      line95Count++;
      console.log(`  ✨ NAŠAO LINIJU 95! (vozilo #${totalProcessed})`);

      // Second check: tripId must contain 8170 or 8171
      const tripId = trip.tripId;
      const routeId = trip.routeId;
      
      console.log(`  🎯 tripId: ${tripId}`);
      console.log(`  🎯 routeId: ${routeId}`);

      if (!tripId) {
        failedTripIdCheck++;
        console.log('  ⚠️ Nema tripId!');
        continue;
      }

      // Check if tripId starts with 8170 or 8171
      if (!tripId.startsWith('8170') && !tripId.startsWith('8171')) {
        failedRouteIdCheck++;
        console.log(`  ⚠️ tripId ne počinje sa 8170 ili 8171: ${tripId}`);
        continue;
      }

      console.log(`  ✅ tripId počinje sa 8170 ili 8171`);

      // Third check: vehicle id must exist and start with P9
      const vehicleId = vehicle.id;
      console.log(`  🎯 vehicleId: ${vehicleId}`);

      if (!vehicleId) {
        failedVehicleIdCheck++;
        console.log('  ⚠️ Nema vehicleId!');
        continue;
      }

      if (!String(vehicleId).startsWith('P9')) {
        failedVehicleIdCheck++;
        console.log(`  ⚠️ vehicleId ne počinje sa P9: ${vehicleId}`);
        continue;
      }

      console.log(`  ✅ vehicleId počinje sa P9`);

      // Extract direction and time from tripId
      // Format is: "8170_1159" where 8170 is direction, 1159 is time (11:59)
      const parts = String(tripId).split('_');
      console.log(`  🔍 tripId parts:`, parts);
      
      if (parts.length !== 2) {
        console.log(`  ⚠️ tripId format nije dobar (${parts.length} delova umesto 2)`);
        continue;
      }
      
      const directionPrefix = parts[0]; // "8170" or "8171"
      const timeShort = parts[1];       // e.g., "1159"
      
      // Use startTime from trip instead of parsing from tripId
      const startTime = trip.startTime; // Already in format "11:59:00"
      console.log(`  🔍 startTime: ${startTime}`);
      
      if (!startTime) {
        console.log(`  ⚠️ Nema startTime u trip objektu`);
        continue;
      }

      console.log(`  🔍 directionPrefix: ${directionPrefix}`);

      // Determine which timetable map to use based on direction
      let mapToUse;
      if (directionPrefix === '8170') {
        mapToUse = timetableMapA;
        console.log(`  ✅ Koristim timetableMapA`);
      } else if (directionPrefix === '8171') {
        mapToUse = timetableMapB;
        console.log(`  ✅ Koristim timetableMapB`);
      } else {
        console.log(`  ⚠️ Nepoznat directionPrefix: ${directionPrefix}`);
        continue;
      }

      // Look up the departure number in timetable
      const brojPolaska = mapToUse[startTime];
      console.log(`  🔍 brojPolaska iz mape za vreme ${startTime}: ${brojPolaska}`);
      
      if (!brojPolaska) {
        failedTimetableCheck++;
        console.log(`  ⚠️ Vreme ${startTime} nije u timetable mapi`);
        continue;
      }
      
      // Extract vehicle number (remove P9 prefix)
      const vozilo = String(vehicleId).substring(2);
      console.log(`  ✅ Vozilo broj: ${vozilo}`);

      liveVehicles.push({
        brojPolaska,
        vozilo,
        vreme: startTime,
      });

      console.log(`  ✅✅✅ USPEŠNO DODATO! brojPolaska=${brojPolaska}, vozilo=${vozilo}, vreme=${startTime}`);

    } catch (e) {
      console.error("❌ Greška pri parsiranju vozila:", e);
      console.error("❌ Item:", JSON.stringify(item, null, 2).slice(0, 500));
    }
  }

  // Summary statistics
  console.log('\n📊 ========== STATISTIKA PARSIRANJA ==========');
  console.log(`   Ukupno obrađeno vozila: ${totalProcessed}`);
  console.log(`   Vozila sa linijom 95: ${line95Count}`);
  console.log(`   Neuspelo zbog tripId: ${failedTripIdCheck}`);
  console.log(`   Neuspelo zbog routeId (8170/8171): ${failedRouteIdCheck}`);
  console.log(`   Neuspelo zbog vehicleId: ${failedVehicleIdCheck}`);
  console.log(`   Neuspelo zbog vremena u mapi: ${failedTimetableCheck}`);
  console.log(`   ✅ UKUPNO USPEŠNO: ${liveVehicles.length}`);
  console.log('============================================\n');

  return liveVehicles;
}

export async function updateSheetData(sheets, liveVehicles) {
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: FULL_RANGE,
  });

  const rows = res.data.values || [];
  const header = rows.shift() || ["Brojpolaska", "Vozilo", "Vremepolaska", "Zamena 1", "Zamena 2", "Zamena 3"];

  const sheetState = new Map();
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const vreme = row[2];
    if (vreme) {
      sheetState.set(vreme, {
        rowIndex: i + 2, 
        brojPolaska: row[0],
        vozilo: row[1],
        zamena1: row[3] || null,
        zamena2: row[4] || null,
        zamena3: row[5] || null,
      });
    }
  }

  const updateRequests = [];
  const appendRequests = [];

  for (const vehicle of liveVehicles) {
    const existingEntry = sheetState.get(vehicle.vreme);
    const novoVozilo = vehicle.vozilo;

    if (!existingEntry) {
      appendRequests.push([
        vehicle.brojPolaska,
        novoVozilo,
        vehicle.vreme,
        "", "", ""
      ]);
      sheetState.set(vehicle.vreme, { 
        rowIndex: -1, 
        brojPolaska: vehicle.brojPolaska, 
        vozilo: novoVozilo 
      });
    } else {
      const { rowIndex, vozilo, zamena1, zamena2, zamena3 } = existingEntry;
      
      const lastKnownVehicle = zamena3 || zamena2 || zamena1 || vozilo;

      if (lastKnownVehicle !== novoVozilo) {
        let updateColumn = null;
        if (!zamena1) updateColumn = 'D';
        else if (!zamena2) updateColumn = 'E';
        else if (!zamena3) updateColumn = 'F';

        if (updateColumn) {
          updateRequests.push({
            range: `${SHEET_NAME}!${updateColumn}${rowIndex}`,
            values: [[novoVozilo]],
          });
          
          if (updateColumn === 'D') existingEntry.zamena1 = novoVozilo;
          else if (updateColumn === 'E') existingEntry.zamena2 = novoVozilo;
          else if (updateColumn === 'F') existingEntry.zamena3 = novoVozilo;
        }
      }
    }
  }

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

  const finalRes = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: FULL_RANGE,
  });
  
  const finalRows = finalRes.data.values || [];
  if (finalRows.length > 0) finalRows.shift(); 
  
  return { header, rows: finalRows };
}
