import { google } from 'googleapis';

export const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
export const SHEET_NAME = 'Sheet1'; 
const FULL_RANGE = `${SHEET_NAME}!A:F`;

export const timetableMapA = {
  "04:45:00": 17, "05:05:00": 19, "05:25:00": 1, "05:45:00": 4, "05:58:00": 6, "06:09:00": 7,
  "06:19:00": 8, "06:29:00": 9, "06:39:00": 10, "06:47:00": 11, "06:55:00": 12, "07:03:00": 13,
  "07:11:00": 14, "07:19:00": 15, "07:27:00": 16, "07:35:00": 17, "07:43:00": 18, "07:51:00": 19,
  "07:59:00": 20, "08:07:00": 21, "08:15:00": 1, "08:23:00": 2, "08:31:00": 3, "08:40:00": 4,
  "08:48:00": 5, "08:56:00": 6, "09:04:00": 7, "09:12:00": 8, "09:20:00": 9, "09:28:00": 10,
  "09:37:00": 11, "09:45:00": 12, "09:53:00": 13, "10:01:00": 14, "10:09:00": 15, "10:17:00": 16,
  "10:25:00": 17, "10:34:00": 18, "10:42:00": 19, "10:50:00": 20, "10:58:00": 21, "11:06:00": 1,
  "11:14:00": 2, "11:22:00": 3, "11:30:00": 4, "11:38:00": 5, "11:47:00": 6, "11:55:00": 7,
  "12:03:00": 8, "12:11:00": 9, "12:19:00": 10, "12:27:00": 11, "12:35:00": 12, "12:42:00": 13,
  "12:50:00": 14, "12:58:00": 15, "13:06:00": 16, "13:13:00": 17, "13:21:00": 18, "13:29:00": 19,
  "13:37:00": 20, "13:44:00": 21, "13:52:00": 22, "14:00:00": 1, "14:07:00": 2, "14:15:00": 3,
  "14:23:00": 4, "14:31:00": 5, "14:38:00": 6, "14:46:00": 7, "14:54:00": 8, "15:02:00": 9,
  "15:09:00": 10, "15:17:00": 11, "15:25:00": 12, "15:32:00": 13, "15:40:00": 14, "15:48:00": 15,
  "15:56:00": 16, "16:03:00": 17, "16:11:00": 18, "16:19:00": 19, "16:27:00": 20, "16:34:00": 21,
  "16:42:00": 22, "16:50:00": 1, "16:57:00": 2, "17:05:00": 3, "17:13:00": 4, "17:21:00": 5,
  "17:28:00": 6, "17:36:00": 7, "17:44:00": 8, "17:52:00": 9, "17:59:00": 10, "18:07:00": 11,
  "18:15:00": 12, "18:23:00": 13, "18:31:00": 14, "18:39:00": 15, "18:48:00": 16, "18:56:00": 17,
  "19:04:00": 18, "19:12:00": 19, "19:20:00": 20, "19:28:00": 21, "19:36:00": 1, "19:45:00": 2,
  "19:54:00": 3, "20:03:00": 4, "20:13:00": 5, "20:23:00": 6, "20:33:00": 7, "20:43:00": 8,
  "20:48:00": 9, "20:53:00": 11, "21:03:00": 13, "21:13:00": 14, "21:23:00": 15, "21:33:00": 16,
  "21:43:00": 17, "21:53:00": 18, "22:03:00": 19, "22:07:00": 20, "22:13:00": 21, "22:23:00": 1,
  "22:33:00": 3, "22:45:00": 4, "22:57:00": 6, "23:00:00": 7, "23:15:00": 8, "23:30:00": 11,
  "23:33:00": 13, "23:45:00": 14, "00:00:00": 16, "00:10:00": 17, "00:25:00": 19
};

export const timetableMapB = {
  "04:00:00": 1, "04:25:00": 4, "04:45:00": 7, "05:00:00": 8, "05:10:00": 10, "05:20:00": 11,
  "05:30:00": 12, "05:39:00": 14, "05:48:00": 15, "05:57:00": 16, "06:06:00": 17, "06:15:00": 18,
  "06:24:00": 19, "06:33:00": 20, "06:42:00": 21, "06:50:00": 1, "06:58:00": 2, "07:06:00": 3,
  "07:15:00": 4, "07:23:00": 5, "07:31:00": 6, "07:39:00": 7, "07:47:00": 8, "07:55:00": 9,
  "08:03:00": 10, "08:12:00": 11, "08:20:00": 12, "08:28:00": 13, "08:36:00": 14, "08:44:00": 15,
  "08:52:00": 16, "09:00:00": 17, "09:09:00": 18, "09:17:00": 19, "09:25:00": 20, "09:33:00": 21,
  "09:41:00": 1, "09:49:00": 2, "09:57:00": 3, "10:05:00": 4, "10:13:00": 5, "10:22:00": 6,
  "10:30:00": 7, "10:38:00": 8, "10:46:00": 9, "10:54:00": 10, "11:02:00": 11, "11:10:00": 12,
  "11:17:00": 13, "11:25:00": 14, "11:33:00": 15, "11:41:00": 16, "11:48:00": 17, "11:56:00": 18,
  "12:04:00": 19, "12:12:00": 20, "12:19:00": 21, "12:27:00": 22, "12:35:00": 1, "12:42:00": 2,
  "12:50:00": 3, "12:58:00": 4, "13:06:00": 5, "13:13:00": 6, "13:21:00": 7, "13:29:00": 8,
  "13:37:00": 9, "13:44:00": 10, "13:52:00": 11, "14:00:00": 12, "14:07:00": 13, "14:15:00": 14,
  "14:23:00": 15, "14:31:00": 16, "14:38:00": 17, "14:46:00": 18, "14:54:00": 19, "15:02:00": 20,
  "15:09:00": 21, "15:17:00": 22, "15:25:00": 1, "15:32:00": 2, "15:40:00": 3, "15:48:00": 4,
  "15:56:00": 5, "16:03:00": 6, "16:11:00": 7, "16:19:00": 8, "16:27:00": 9, "16:34:00": 10,
  "16:42:00": 11, "16:51:00": 12, "16:59:00": 13, "17:08:00": 14, "17:16:00": 15, "17:25:00": 16,
  "17:33:00": 17, "17:42:00": 18, "17:50:00": 19, "17:59:00": 20, "18:08:00": 21, "18:10:00": 22,
  "18:16:00": 1, "18:25:00": 2, "18:33:00": 3, "18:42:00": 4, "18:50:00": 5, "18:59:00": 6,
  "19:07:00": 7, "19:16:00": 8, "19:24:00": 9, "19:27:00": 10, "19:33:00": 11, "19:37:00": 12,
  "19:42:00": 13, "19:51:00": 14, "20:00:00": 15, "20:09:00": 16, "20:18:00": 17, "20:27:00": 18,
  "20:36:00": 19, "20:45:00": 20, "20:55:00": 21, "21:05:00": 1, "21:05:00": 2, "21:15:00": 3,
  "21:25:00": 4, "21:28:00": 5, "21:35:00": 6, "21:45:00": 7, "21:55:00": 8, "22:06:00": 11,
  "22:18:00": 13, "22:30:00": 14, "22:34:00": 15, "22:45:00": 16, "23:00:00": 17, "23:03:00": 18,
  "23:15:00": 19, "23:23:00": 21, "23:33:00": 1, "23:43:00": 3, "23:55:00": 4
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
  if (!data || !data.vehicles) {
    return [];
  }

  const liveVehicles = [];

  for (const item of data.vehicles) {
    try {
      const trip = item?.vehicle?.trip;
      const vehicle = item?.vehicle?.vehicle;

      if (!trip || !vehicle || trip.lineNumber !== "95") {
        continue;
      }

      const tripId = trip.tripId;
      const vehicleId = vehicle.id;

      if (!tripId || !vehicleId || !vehicleId.startsWith('P9')) {
        continue;
      }
      
      const parts = tripId.split('_');
      if (parts.length !== 2) {
        continue;
      }
      
      const directionPrefix = parts[0];
      const timeShort = parts[1];
      const timeFull = `${timeShort.slice(0, 2)}:${timeShort.slice(2)}:00`;

      let mapToUse;
      if (directionPrefix === '8170') {
        mapToUse = timetableMapA;
      } else if (directionPrefix === '8171') {
        mapToUse = timetableMapB;
      } else {
        continue;
      }

      const brojPolaska = mapToUse[timeFull];
      if (!brojPolaska) {
        continue;
      }
      
      const vozilo = vehicleId.substring(2);

      liveVehicles.push({
        brojPolaska,
        vozilo,
        vreme: timeFull,
      });

    } catch (e) {
      console.error("Greška pri parsiranju vozila:", e, item);
    }
  }
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
      valueInputOption: 'USER_ENTERTAINED',
      resource: {
        values: appendRequests,
      },
    });
  }

  if (updateRequests.length > 0) {
    await sheets.spreadsheets.values.batchUpdate({
      spreadsheetId: SPREADSHEET_ID,
      resource: {
        valueInputOption: 'USER_ENTERTAINED',
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
