import { readFileSync, writeFileSync } from 'fs';
import { marked } from 'marked';

const md = readFileSync('public/docs/Burbuja_Sintetica_Caso_Estudio_PRINT.md', 'utf-8');
const html = await marked(md);

const fullHtml = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Burbuja Sintética — Caso de Estudio Completo</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=JetBrains+Mono:wght@400;500&display=swap');
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: 'Inter', -apple-system, sans-serif;
  color: #1a1a2e; font-size: 11px; line-height: 1.7;
  max-width: 750px; margin: 0 auto; padding: 40px 20px;
}
h1 { font-size: 24px; font-weight: 900; color: #1a1a2e; border-bottom: 3px solid #1a1a2e;
  padding-bottom: 8px; margin: 32px 0 16px; page-break-after: avoid; }
h1:first-of-type { font-size: 28px; text-align: center; border: none; margin-top: 60px; }
h2 { font-size: 16px; font-weight: 700; color: #1a1a2e; border-bottom: 1px solid #e2e8f0;
  padding-bottom: 5px; margin: 26px 0 12px; page-break-after: avoid; }
h3 { font-size: 13px; font-weight: 600; color: #1a1a2e; margin: 18px 0 8px; page-break-after: avoid; }
p { margin-bottom: 8px; text-align: justify; }
strong { color: #1a1a2e; font-weight: 700; }
em { color: #4a5568; }
blockquote { border-left: 3px solid #e53e3e; padding: 10px 16px; margin: 14px 0;
  background: #fef5f5; border-radius: 0 4px 4px 0; color: #4a5568; font-style: italic; }
code { font-family: 'JetBrains Mono', monospace; background: #f0f0f5; padding: 1px 4px;
  border-radius: 3px; font-size: 10px; }
pre { background: #0f0f18; color: #e2e8f0; padding: 14px; border-radius: 6px;
  font-size: 10px; line-height: 1.5; overflow-x: auto; page-break-inside: avoid; }
pre code { background: none; padding: 0; color: inherit; }
table { width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 10px; page-break-inside: avoid; }
th { background: #1a1a2e; color: white; font-weight: 600; text-align: left; padding: 7px 10px; }
td { padding: 5px 10px; border-bottom: 1px solid #e2e8f0; }
tr:nth-child(even) { background: #f7fafc; }
hr { border: none; border-top: 1px solid #e2e8f0; margin: 22px 0; }
ul, ol { padding-left: 20px; margin-bottom: 8px; }
li { margin-bottom: 3px; }
a { color: #6d4aff; text-decoration: none; }
@media print {
  body { max-width: 100%; padding: 0; }
  @page { size: A4; margin: 20mm 18mm; }
}
</style>
</head>
<body>
${html}
<footer style="margin-top:40px;padding-top:16px;border-top:1px solid #e2e8f0;text-align:center;font-size:9px;color:#a0aec0;">
  Semantic Field Science · semanticfieldscience.org · Febrero 2026
</footer>
</body>
</html>`;

writeFileSync('public/docs/Burbuja_Sintetica_Caso_Estudio.html', fullHtml, 'utf-8');
console.log('✅ HTML generated: public/docs/Burbuja_Sintetica_Caso_Estudio.html');
