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
//
// SHEETS CREADAS AUTOMÁTICAMENTE:
//   • Suscripciones  — newsletter signups
//   • Descargas      — document downloads
//   • Visitas        — page visits (country, page, referrer, lang)
//   • Dashboard      — auto-calculated summary stats
// ============================================================

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    if (data.type === 'newsletter') {
      // --- NEWSLETTER SUBSCRIPTION ---
      var sheet = ss.getSheetByName('Suscripciones') || ss.insertSheet('Suscripciones');
      
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
      
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['Timestamp', 'Documento', 'URL', 'Country', 'Country Code', 'City', 'Language', 'User Agent']);
        sheet.getRange(1, 1, 1, 8).setFontWeight('bold');
      }
      
      sheet.appendRow([
        data.timestamp || new Date().toISOString(),
        data.document || '',
        data.href || '',
        data.country || '',
        data.countryCode || '',
        data.city || '',
        data.language || '',
        data.userAgent || ''
      ]);
      
    } else if (data.type === 'visit') {
      // --- PAGE VISIT TRACKING ---
      var sheet = ss.getSheetByName('Visitas') || ss.insertSheet('Visitas');
      
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['Timestamp', 'Page', 'Country', 'Country Code', 'City', 'Language', 'Referrer', 'Screen', 'User Agent']);
        sheet.getRange(1, 1, 1, 9).setFontWeight('bold');
      }
      
      sheet.appendRow([
        data.timestamp || new Date().toISOString(),
        data.page || '',
        data.country || '',
        data.countryCode || '',
        data.city || '',
        data.language || '',
        data.referrer || '',
        data.screen || '',
        data.userAgent || ''
      ]);
      
      // Update dashboard after each visit
      updateDashboard_(ss);
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

// ============================================================
// DASHBOARD — Auto-calculated summary
// ============================================================
function updateDashboard_(ss) {
  var dash = ss.getSheetByName('Dashboard') || ss.insertSheet('Dashboard');
  
  // Clear and rebuild
  dash.clear();
  
  var now = new Date();
  var today = Utilities.formatDate(now, Session.getScriptTimeZone(), 'yyyy-MM-dd');
  
  // --- Header ---
  dash.getRange('A1').setValue('📊 SFS Analytics Dashboard');
  dash.getRange('A1').setFontSize(16).setFontWeight('bold');
  dash.getRange('A2').setValue('Last updated: ' + now.toISOString());
  dash.getRange('A2').setFontColor('#999999').setFontSize(9);
  
  // --- Total counts ---
  var visits = ss.getSheetByName('Visitas');
  var downloads = ss.getSheetByName('Descargas');
  var subs = ss.getSheetByName('Suscripciones');
  
  var totalVisits = visits ? Math.max(visits.getLastRow() - 1, 0) : 0;
  var totalDownloads = downloads ? Math.max(downloads.getLastRow() - 1, 0) : 0;
  var totalSubs = subs ? Math.max(subs.getLastRow() - 1, 0) : 0;
  
  dash.getRange('A4').setValue('METRIC').setFontWeight('bold');
  dash.getRange('B4').setValue('VALUE').setFontWeight('bold');
  
  dash.getRange('A5').setValue('Total Visits');
  dash.getRange('B5').setValue(totalVisits);
  dash.getRange('A6').setValue('Total Downloads');
  dash.getRange('B6').setValue(totalDownloads);
  dash.getRange('A7').setValue('Total Subscribers');
  dash.getRange('B7').setValue(totalSubs);
  
  // --- Visits today ---
  var visitsToday = 0;
  if (visits && totalVisits > 0) {
    var visitData = visits.getRange(2, 1, totalVisits, 1).getValues();
    for (var i = 0; i < visitData.length; i++) {
      if (visitData[i][0] && visitData[i][0].toString().indexOf(today) === 0) {
        visitsToday++;
      }
    }
  }
  dash.getRange('A8').setValue('Visits Today');
  dash.getRange('B8').setValue(visitsToday);
  
  // --- Country breakdown ---
  dash.getRange('A10').setValue('🌍 VISITS BY COUNTRY').setFontWeight('bold');
  dash.getRange('A11').setValue('Country').setFontWeight('bold');
  dash.getRange('B11').setValue('Code').setFontWeight('bold');
  dash.getRange('C11').setValue('Visits').setFontWeight('bold');
  
  if (visits && totalVisits > 0) {
    var countryData = visits.getRange(2, 3, totalVisits, 2).getValues(); // Country, Code
    var countryCounts = {};
    var countryCodes = {};
    
    for (var i = 0; i < countryData.length; i++) {
      var country = countryData[i][0] || 'Unknown';
      var code = countryData[i][1] || '??';
      if (!countryCounts[country]) {
        countryCounts[country] = 0;
        countryCodes[country] = code;
      }
      countryCounts[country]++;
    }
    
    // Sort by count desc
    var sorted = Object.keys(countryCounts).sort(function(a, b) {
      return countryCounts[b] - countryCounts[a];
    });
    
    var row = 12;
    for (var j = 0; j < sorted.length && j < 30; j++) {
      dash.getRange('A' + row).setValue(sorted[j]);
      dash.getRange('B' + row).setValue(countryCodes[sorted[j]]);
      dash.getRange('C' + row).setValue(countryCounts[sorted[j]]);
      row++;
    }
  }
  
  // --- Top pages ---
  var pageRow = 12 + 32; // Start after countries
  dash.getRange('A' + pageRow).setValue('📄 VISITS BY PAGE').setFontWeight('bold');
  pageRow++;
  dash.getRange('A' + pageRow).setValue('Page').setFontWeight('bold');
  dash.getRange('B' + pageRow).setValue('Visits').setFontWeight('bold');
  pageRow++;
  
  if (visits && totalVisits > 0) {
    var pageData = visits.getRange(2, 2, totalVisits, 1).getValues();
    var pageCounts = {};
    
    for (var i = 0; i < pageData.length; i++) {
      var page = pageData[i][0] || '/';
      if (!pageCounts[page]) pageCounts[page] = 0;
      pageCounts[page]++;
    }
    
    var sortedPages = Object.keys(pageCounts).sort(function(a, b) {
      return pageCounts[b] - pageCounts[a];
    });
    
    for (var j = 0; j < sortedPages.length && j < 20; j++) {
      dash.getRange('A' + pageRow).setValue(sortedPages[j]);
      dash.getRange('B' + pageRow).setValue(pageCounts[sortedPages[j]]);
      pageRow++;
    }
  }
  
  // Auto-resize columns
  dash.autoResizeColumn(1);
  dash.autoResizeColumn(2);
  dash.autoResizeColumn(3);
}

// Manual trigger — run this to create/refresh the dashboard
function refreshDashboard() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  updateDashboard_(ss);
}
