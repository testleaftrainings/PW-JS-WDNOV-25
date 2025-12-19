import { test } from "@playwright/test";
import credentials from "../../../Data/login.json"


//credentials = [{TC001},{TC002}] => [0,1]
for(let data of credentials){

test(`Learn to read data from JSON ${data.TCaseId}`,async ({page}) => {    

    await page.goto(`http://leaftaps.com/opentaps/control/login`);
    await page.locator(`//input[@id="username"]`).fill(data.Username); //demosalesmanager , democsr
    await page.locator(`//input[@id="password"]`).fill(data.Password);//crmsfa . crmsfa
    await page.locator(`//input[@class="decorativeSubmit"]`).click();

    await page.locator(`//a[contains(text(),"CRM")]`).click();

})

}

/* First Iteration : TC001

test(`Learn to read data from JSON TC001`,async ({page}) => {    

    await page.goto(`http://leaftaps.com/opentaps/control/login`);
    await page.locator(`//input[@id="username"]`).fill(data.Username); //demosalesmanager , democsr
    await page.locator(`//input[@id="password"]`).fill(data.Password);//crmsfa . crmsfa
    await page.locator(`//input[@class="decorativeSubmit"]`).click();

    await page.locator(`//a[contains(text(),"CRM")]`).click();
})
    
Second Iteration : TC002

test(`Learn to read data from JSON TC002`,async ({page}) => {    

    await page.goto(`http://leaftaps.com/opentaps/control/login`);
    await page.locator(`//input[@id="username"]`).fill(data.Username); //demosalesmanager , democsr
    await page.locator(`//input[@id="password"]`).fill(data.Password);//crmsfa . crmsfa
    await page.locator(`//input[@class="decorativeSubmit"]`).click();

    await page.locator(`//a[contains(text(),"CRM")]`).click();
})*/