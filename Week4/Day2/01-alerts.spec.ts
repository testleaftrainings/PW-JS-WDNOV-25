import { test } from "@playwright/test";

test.only(`Learn to interact with alerts using page.on`, async ({ page }) => {

    await page.goto(`https://leafground.com/alert.xhtml`);

//    page.on('dialog', async (alert) => {
     page.once('dialog', async (alert) => {        
        const alertMessage = alert.message();
        console.log(`The message inside the alert says ${alertMessage}`);

        const alertType = alert.type() // simple,confirm, prompt
        console.log(`The alert type is ${alertType}`);

        if(alertType==='confirm'){
            await alert.accept()
        }else if(alertType==='prompt'){
            await alert.accept("Testleaf")
        }else{
            await alert.dismiss()
        }

    })


    await page.locator(`(//span[text()="Show"])[1]`).click(); // Stop here --> Simple

    await page.waitForTimeout(3000) // Learning purpose

     //When we use page.oce the control is taken back by playwright afte this point
    await page.locator(`(//span[text()="Show"])[2]`).click();//Confirm

    await page.waitForTimeout(3000) // Learning purpose

    await page.locator(`(//span[text()="Show"])[5]`).click();//Prompt

    await page.waitForTimeout(3000) // Learning purpose
})