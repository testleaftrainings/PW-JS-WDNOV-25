
 import { test } from "@playwright/test";


 test("Test to launch a browser",async ({page})=>{  // page fixture

await page.goto(`http://leaftaps.com/opentaps/control/main`)

/* Promise 3 stages :
1, Pending
2, Resolved
3, Rejected */

//await page.locator(`[id="username"]`).fill(`demosalesmanager`)
//await page.locator(`#username`).fill(`demosalesmanager`)
//await page.locator(`input`).nth(0).fill(`demosalesmanager`) // nth method
await page.locator(`input`).first().fill(`demosalesmanager`)

//await page.locator(`[id="password"]`).fill(`crmsfa`)
//await page.locator(`#password`).fill(`crmsfa`)
await page.locator(`input`).nth(1).fill(`crmsfa`)

//await page.locator(`[class="decorativeSubmit"]`).click()
//await page.locator(`.decorativeSubmit`).click()
//await page.locator(`input`).nth(2).click()
await page.locator(`input`).last().click()

await page.waitForTimeout(3000);

/* Priority to choose your attribute value:
1. aria-label
2. id
3, name
4. class */


 })

//Playwright Locator Methods

//nth()
//first()
//last()