const puppeteer = require("puppeteer-core");
const chromium = require("@sparticuz/chromium");

const scrapeLogic = async (res, url) => {
  try {
    
      chromium.setHeadlessMode = true;
      chromium.setGraphicsMode = false;
      
    
        const browser = await puppeteer.launch({
          args: [...chromium.args, '--disable-dev-shm-usage', '--no-sandbox', '--disable-setuid-sandbox'],
          defaultViewport: { width: 800, height: 600 }, // Lowered viewport size for efficiency
          executablePath: await chromium.executablePath(),
          // executablePath: "/google/idx/builtins/bin/chromium-browser",
          headless: chromium.headless,
        });
      
        const page = await browser.newPage();
        await page.goto(url);
        const pageTitle = await page.title();
        res.send(pageTitle);
        await browser.close();
    
  } catch (error) {
      console.log(error)
      res.send("Something went wrong with puppeteer")
  }
}

module.exports = {scrapeLogic};
