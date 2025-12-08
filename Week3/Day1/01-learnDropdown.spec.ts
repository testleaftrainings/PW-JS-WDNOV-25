import { test } from "@playwright/test";

test(`Learn to handle dropdown`, async ({ page }) => {


    await page.goto(`http://leaftaps.com/opentaps/control/login`);

    await page.locator(`//input[@id="username"]`).fill(`demosalesmanager`);
    await page.locator(`//input[@id="password"]`).fill(`crmsfa`);
    await page.locator(`//input[@class="decorativeSubmit"]`).click();

    await page.locator(`//a[contains(text(),"CRM")]`).click();

    await page.locator(`//a[text()="Create Lead"]`).click();

    await page.locator(`//input[@id="createLeadForm_companyName"]`).fill("Testleaf");

    await page.locator(`//input[@id="createLeadForm_firstName"]`).fill("Ravindran");

    await page.locator(`//input[@id="createLeadForm_lastName"]`).fill("R");

   // await page.selectOption(`#createLeadForm_dataSourceId`,{label:"Direct Mail"}) // using label// visible text

 //  await page.selectOption(`#createLeadForm_dataSourceId`,{value:"LEAD_DIRECTMAIL"}) // using value
  
    await page.selectOption(`#createLeadForm_dataSourceId`,{index:3}) // using value

   const dropdownLocators = page.locator(`#createLeadForm_dataSourceId>option`); // 13 locators
   
    const dropdownCount = await dropdownLocators.count(); // 13

    console.log("Number of dropdown present"+dropdownCount);
    
   
    for (let index = 0; index <dropdownCount ; index++) {

       console.log(await dropdownLocators.nth(index).innerText())
     
        /* dropdownLocators.nth(0).innerText() // blank
        dropdownLocators.nth(1).innerText() // cold call */

            
    }
 
 
 await page.waitForTimeout(3000);





})