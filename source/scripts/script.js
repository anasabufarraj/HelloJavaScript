// (c)) Copyright 2018, Anas Abu Farraj.
// JavaScript Playground
// 29 Jun 2018

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://goyoom.com');
  await page.screenshot({ path: './source/images/goyoom.png' });

  await browser.close();
})();
