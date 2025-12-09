import { expect, test } from "@playwright/test";

test(`Learn to handle dropdown`, async ({ page }) => {

    test.setTimeout(20000);
    await page.goto(`http://leaftaps.com/opentaps/control/login`);

    await expect(page.locator(`//input[@id="username"]`)).toBeEditable(); // Locator based assertion --> autoretry assertion

    await page.locator(`//input[@id="username"]`).fill(`demosalesmanager`);
    await page.locator(`//input[@id="password"]`).fill(`crmsfa`);

    await expect(page.locator(`//input[@class="decorativeSubmit"]`)).toBeEnabled({timeout:3000}) // Assertion timeout
    await page.locator(`//input[@class="decorativeSubmit"]`).click({timeout:3000}); // action timeout

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

    expect(dropdownCount).toBeGreaterThan(10) // Generic assertions --> Non retry assertion

    console.log("Number of dropdown present"+dropdownCount);
    
   
    for (let index = 0; index <dropdownCount ; index++) {

       console.log(await dropdownLocators.nth(index).innerText())
     
        /* dropdownLocators.nth(0).innerText() // blank
        dropdownLocators.nth(1).innerText() // cold call */

            
    }
 
    await page.locator(`//input[@class="smallSubmit"]`).click();

     const statusLocator = page.locator(`//span[@id="viewLead_statusId_sp"]`);

     await expect(statusLocator).toContainText(`Assigned`); // Locator based assertion is validation of the value through the locator --> auto retry

     const statusText = await statusLocator.innerText();

     console.log(`The status is ${statusText}`); //

     expect(statusText).toContain("Assigned"); // Generic assertion is is validating the value directly // non retry
     



 
 await page.waitForTimeout(3000);





})