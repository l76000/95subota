import { getGoogleSheetsClient, SPREADSHEET_ID, SHEET_NAME } from './_utils.js';

export default async function handler(request, response) {
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return response.status(401).send('Unauthorized');
  }

  try {
    const sheets = await getGoogleSheetsClient();
    
    const rangeToClear = `${SHEET_NAME}!A2:F`;

    await sheets.spreadsheets.values.clear({
      spreadsheetId: SPREADSHEET_ID,
      range: rangeToClear,
    });

    return response.status(200).send('Google Sheet je uspešno obrisan.');
  } catch (error) {
    console.error('Greška pri brisanju sheeta:', error);
    return response.status(500).send('Greška na serveru.');
  }
}
