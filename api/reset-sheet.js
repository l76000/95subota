import { getGoogleSheetsClient, SPREADSHEET_ID, SHEET_NAME } from './_utils.js';

export default async function handler(request, response) {
  try {
    console.log('🔄 RESET SHEET: Započinjem čišćenje sheet-a...');
    
    // Proveri da li je zaista ponoć (ili blizu ponoći)
    const now = new Date();
    const belgradeDateString = now.toLocaleString('en-US', { timeZone: 'Europe/Belgrade' });
    const belgradeDate = new Date(belgradeDateString);
    const hour = belgradeDate.getHours();
    
    console.log(`⏰ Trenutno vreme u Beogradu: ${belgradeDate.toLocaleString('sr-RS')}`);
    console.log(`⏰ Sat: ${hour}`);
    
    const sheets = await getGoogleSheetsClient();
    
    // Obriši sve redove osim header-a
    await sheets.spreadsheets.values.clear({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A2:F`,
    });
    
    console.log('✅ Sheet uspešno očišćen!');
    
    response.status(200).json({
      success: true,
      message: 'Sheet je uspešno resetovan',
      time: belgradeDate.toLocaleString('sr-RS')
    });
    
  } catch (error) {
    console.error('❌ Greška pri resetovanju sheet-a:', error);
    response.status(500).json({
      success: false,
      error: error.message
    });
  }
}
