// Genera el PDF de la hoja de vida: node cv/build-pdf.cjs
const path = require('path')
const { chromium } = require('playwright')

// Pie de página en cada hoja con el enlace al portafolio
const footer = `
  <div style="width:100%;margin:0 15mm;display:flex;justify-content:space-between;font-family:Poppins,Arial,sans-serif;font-size:7.5pt;color:#8a8a8a;">
    <span>David Esteban Patiño Juspian · Desarrollador Full-Stack</span>
    <span>Portafolio: <a href="https://pats-portfolio-lite.vercel.app" style="color:#e11d2a;font-weight:600;text-decoration:none;">pats-portfolio-lite.vercel.app</a> · <span class="pageNumber"></span>/<span class="totalPages"></span></span>
  </div>`

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto('file://' + path.join(__dirname, 'hoja-de-vida.html'), { waitUntil: 'networkidle' })
  await page.emulateMedia({ media: 'print' })
  await page.pdf({
    path: path.join(__dirname, 'Hoja_de_vida_David_Patino_Juspian.pdf'),
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: footer,
  })
  await browser.close()
})()
