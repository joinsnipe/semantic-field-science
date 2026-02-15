module.exports = {
  stylesheet: ['./pdf-style.css'],
  pdf_options: {
    format: 'A4',
    margin: {
      top: '60px',
      bottom: '70px',
      left: '50px',
      right: '50px',
    },
    displayHeaderFooter: true,
    headerTemplate: '<div></div>',
    footerTemplate: '<div style="text-align:center;width:100%;font-size:9px;color:#a0aec0;font-family:Inter,sans-serif;padding:0 50px;">Página <span class="pageNumber"></span> de <span class="totalPages"></span> · Semantic Field Science · semanticfieldscience.org</div>',
  },
  launch_options: {
    args: ['--no-sandbox'],
  },
};
