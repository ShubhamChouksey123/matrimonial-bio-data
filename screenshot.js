const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new'
  });

  const page = await browser.newPage();

  // Set viewport to a standard desktop size
  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 2, // For high-quality screenshots
  });

  // Load the HTML file
  const filePath = 'file://' + path.resolve(__dirname, 'index.html');
  await page.goto(filePath, {
    waitUntil: 'networkidle0'
  });

  // Wait a bit for fonts to load
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Take full page screenshot
  await page.screenshot({
    path: 'img/biodata-screenshot.png',
    fullPage: true
  });

  console.log('Screenshot saved as img/biodata-screenshot.png');

  await browser.close();
})();
