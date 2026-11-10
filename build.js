// HTML 소스(src/*.html)를 합쳐 PDF로 렌더링합니다.  사용법: node build.js
const fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
(async () => {
  const dir = path.join(__dirname, 'src');
  const html = fs.readdirSync(dir).filter(f => f.endsWith('.html')).sort()
    .map(f => fs.readFileSync(path.join(dir, f), 'utf8')).join('\n');
  fs.writeFileSync(path.join(__dirname, 'build.html'), html);
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.join(__dirname, 'build.html'), { waitUntil: 'load' });
  await page.pdf({
    path: path.join(__dirname, 'AWS-인프라-네트워크-학습가이드.pdf'),
    format: 'A4', printBackground: true, preferCSSPageSize: true,
    displayHeaderFooter: true,
    headerTemplate: '<div></div>',
    footerTemplate: '<div style="font-size:8px;width:100%;text-align:center;color:#888;font-family:sans-serif"><span class="pageNumber"></span> / <span class="totalPages"></span></div>',
  });
  await browser.close();
  fs.unlinkSync(path.join(__dirname, 'build.html'));
})();
