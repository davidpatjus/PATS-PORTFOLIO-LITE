// Genera los PDF de la hoja de vida (ES y EN) en public/cv: node cv/build-pdf.cjs
const path = require('path')
const { chromium } = require('playwright')

const OUT_DIR = path.join(__dirname, '..', 'public', 'cv')

const DOCS = [
  {
    html: 'hoja-de-vida.html',
    pdf: 'David-Patino-CV-ES.pdf',
    role: 'Desarrollador Full-Stack',
    portfolio: 'Portafolio',
  },
  {
    html: 'resume.html',
    pdf: 'David-Patino-Resume-EN.pdf',
    role: 'Full-Stack Developer',
    portfolio: 'Portfolio',
  },
]

// Pie de página en cada hoja con el enlace al portafolio
const footer = ({ role, portfolio }) => `
  <div style="width:100%;margin:0 15mm;display:flex;justify-content:space-between;font-family:Poppins,Arial,sans-serif;font-size:7.5pt;color:#8a8a8a;">
    <span>David Esteban Patiño Juspian · ${role}</span>
    <span>${portfolio}: <a href="https://pats-portfolio-lite.vercel.app" style="color:#e11d2a;font-weight:600;text-decoration:none;">pats-portfolio-lite.vercel.app</a> · <span class="pageNumber"></span>/<span class="totalPages"></span></span>
  </div>`

;(async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.emulateMedia({ media: 'print' })
  for (const doc of DOCS) {
    await page.goto('file://' + path.join(__dirname, doc.html), { waitUntil: 'networkidle' })
    await page.pdf({
      path: path.join(OUT_DIR, doc.pdf),
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: true,
      headerTemplate: '<span></span>',
      footerTemplate: footer(doc),
    })
  }
  await browser.close()
})()
