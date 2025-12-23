import { test } from "@playwright/test";

// //test.skip

// test.skip(`Test.skip annotation for Lead Module`,async ({page}) => {
    
//  await page.goto(`http://leaftaps.com/opentaps/control/login`);
//     await page.locator(`//input[@id="username"]`).fill("democsr2"); //demosalesmanager , democsr
//     await page.locator(`//input[@id="password"]`).fill("crmsfa");//crmsfa . crmsfa
//     await page.locator(`//input[@class="decorativeSubmit"]`).click();
//     await page.locator(`//a[contains(text(),"CRM")]`).click();
// })

// //test.skip

// test(`Test.skip annotation check2 Account Module`,async ({page}) => {
    
//  await page.goto(`http://leaftaps.com/opentaps/control/login`);
//     await page.locator(`//input[@id="username"]`).fill("democsr2"); //demosalesmanager , democsr
//     await page.locator(`//input[@id="password"]`).fill("crmsfa");//crmsfa . crmsfa
//     await page.locator(`//input[@class="decorativeSubmit"]`).click();
//     await page.locator(`//a[contains(text(),"CRM")]`).click();
// })

// test.fixme(`Test is under repair/flaky`,async ({page}) => {
    
//     await page.goto(`http://leaftaps.com/opentaps/control/login`);
//     await page.locator(`//input[@id="username"]`).fill("democsr2"); //demosalesmanager , democsr
//     await page.locator(`//input[@id="password"]`).fill("crmsfa");//crmsfa . crmsfa
//     await page.locator(`//input[@class="decorativeSubmit"]`).click();
//     await page.locator(`//a[contains(text(),"CRM")]`).click()
// })

// test.fail(`Known bug : CRM link is not visible`,async ({page}) => {
    
//     await page.goto(`http://leaftaps.com/opentaps/control/login`);
//     await page.locator(`//input[@="username"]`).fill("democsr2"); //demosalesmanager , democsr
//     await page.locator(`//input[@id="password"]`).fill("crmsfa");//crmsfa . crmsfa
//     await page.locator(`//input[@class="decorativeSubmit"]`).click();
//     await page.locator(`//a[contains(text(),"CRM")]`).click()
// })


test(`Slow test increase timeout`,async ({page}) => {
   test.slow();
    await page.goto(`http://leaftaps.com/opentaps/control/login`);
    await page.locator(`//input[@id="username"]`).fill("democsr2"); //demosalesmanager , democsr
    await page.locator(`//input[@id="password"]`).fill("");//crmsfa . crmsfa
    await page.locator(`//input[@class="decorativeSubmit"]`).click();
    await page.locator(`//a[contains(text(),"CRM")]`).click()
})