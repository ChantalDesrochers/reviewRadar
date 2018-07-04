const puppeteer = require("puppeteer");

(async() => {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://google.com', {waitUntil: 'networkidle2'});
// Type our query into the search bar
  await page.type('logrocket');

  await page.click('input[type="submit"]');

// Wait for the results to show up
  await page.waitForSelector('h3 a');

// Extract the results from the page
  const links = await page.evaluate(() => {
      const anchors = Array.from(document.querySelectorAll('h3 a'));
      return anchors.map(anchor => anchor.textContent);
  });
  console.log(links.join('\n'));
  browser.close();

})();
/*

networkidle0 comes handy for SPAs that load resources with fetch requests.
networkidle2 comes handy for pages that do long-polling or any other side activity.

*/
