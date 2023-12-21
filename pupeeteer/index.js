 //document.querySelector("#cadernos")
 const pup = require('puppeteer');

 const url = "https://dje.tjsp.jus.br/cdje/index.do;jsessionid=65FEE5B161DB0BE3C9396A34E61340BE.cdje1";
 
 (
     async () => {
 //      const browser = await pup.launch({ hadless: true});
         const browser = await pup.launch({headless: false, PUPPETEER_DISABLE_HEADLESS_WARNING: true});
         const page = await browser.newPage();
         console.log("iniciei!");
 
         await page.goto(url);
         console.log("Fui para URL!");
         await page.select('select#cadernos', '2');
         await page.select('select#secoes', '1');
 
         await page.waitForTimeout(1000);
         await Promise.all([
             page.waitForNavigation(),
             page.click("#consultar")
         ])
 
         await page.waitForTimeout(3000);
         await browser.close();
     }
 )()
 
 //await page.waitForTimeout(1000);
 //page.select('select#secoes', '1');
 //console.log(await page.$$('#cadernos'));
 //console.log(await page.$('#cadernos').options[1].textContent);
 //console.log(await page.$('#cadernos').options);
 //document.querySelector("#cadernos").options[1].textContent;
 //page.type("#dtDiario", date);
 //const DATE = "15/12/2023";