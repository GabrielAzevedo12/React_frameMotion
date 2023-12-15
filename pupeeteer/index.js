const pup = require('puppeteer');

const url = "https://www.mercadolivre.com.br/";

(
    async () => {
        const browser = await pup.launch({ hadless: false});
        const page = await browser.newPage();
        console.log("iniciei!");

        await page.goto(url);
        console.log("Fui para URL!");

        await browser.close();
    }
)()