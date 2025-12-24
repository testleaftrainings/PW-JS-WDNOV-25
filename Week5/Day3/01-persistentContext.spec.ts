

import { chromium, test } from "@playwright/test";

test(`Test to launch the browser using persitent context`,async () => {
    
    const userDatDir = "./myUserDataDir"
/* playwright context => incognito mode
persistent context => is similar to google profile */

    const context = await chromium.launchPersistentContext(userDatDir,{
        headless:false,
        permissions:['notifications'],
        httpCredentials:{
            username : "admin",
            password:"testleaf"
        }
    })

    const page = await context.newPage()
    await page.goto(`https://leafground.com/auth.xhtml`); 
    await page.locator(`//span[text()="Basic Auth"]`).click();
    await page.waitForTimeout(3000)

})