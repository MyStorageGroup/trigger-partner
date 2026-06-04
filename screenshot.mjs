import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pages = [
    { file: 'index.html', out: 'Trigger-Partner-Preview.png' },
    { file: 'vi.html',    out: 'Trigger-Partner-Preview-VI.png' },
];

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1.5 });

for (const { file, out } of pages) {
    const url = 'file:///' + path.join(__dirname, file).replace(/\\/g, '/');
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 2000));
    const outPath = path.join(__dirname, out);
    await page.screenshot({ path: outPath, fullPage: true });
    const { width, height } = await page.evaluate(() => ({
        width: document.body.scrollWidth,
        height: document.body.scrollHeight,
    }));
    console.log(`✓ ${out}  (${width}×${height}px logical → saved at 1.5× scale)`);
}

await browser.close();
