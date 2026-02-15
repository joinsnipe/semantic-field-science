// ============================================================
// Google Apps Script — Web App para Semantic Field Science
// ============================================================
// INSTRUCCIONES:
// 1. Abre tu Google Sheet: https://docs.google.com/spreadsheets/d/1ru3TWmdUOjfu3GUZofURIJwTAr6nGavj1OptPK3rahE
// 2. Ve a Extensiones > Apps Script
// 3. Pega este código completo (reemplaza todo lo que haya)
// 4. Guarda (Ctrl+S)
// 5. Deploy > New deployment > Web app
//    - Execute as: Me
//    - Who has access: Anyone
// 6. Copia la URL del deployment
// 7. Crea un archivo .env.local en el proyecto:
//    NEXT_PUBLIC_GSHEET_URL=https://script.google.com/macros/s/xxxxx/exec
// ============================================================

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    if (data.type === 'newsletter') {
      // --- NEWSLETTER SUBSCRIPTION ---
      var sheet = ss.getSheetByName('Suscripciones') || ss.insertSheet('Suscripciones');
      
      // Header row if empty
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['Timestamp', 'Nombre', 'Email', 'País', 'Interés']);
        sheet.getRange(1, 1, 1, 5).setFontWeight('bold');
      }
      
      sheet.appendRow([
        data.timestamp || new Date().toISOString(),
        data.name || '',
        data.email || '',
        data.country || '',
        data.interest || ''
      ]);
      
    } else if (data.type === 'download') {
      // --- DOWNLOAD TRACKING ---
      var sheet = ss.getSheetByName('Descargas') || ss.insertSheet('Descargas');
      
      // Header row if empty
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['Timestamp', 'Documento', 'URL', 'User Agent']);
        sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
      }
      
      sheet.appendRow([
        data.timestamp || new Date().toISOString(),
        data.document || '',
        data.href || '',
        data.userAgent || ''
      ]);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'SFS Sheet API active' }))
    .setMimeType(ContentService.MimeType.JSON);
}
