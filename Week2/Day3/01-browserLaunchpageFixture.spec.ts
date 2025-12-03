
 import { chromium, firefox, test } from "@playwright/test";


 test("Test to launch a browser",async ({page})=>{  // page fixture

/* const browser = await firefox.launch()
const context =  await browser.newContext()
const page = await context.newPage() */

await page.goto(`https://www.amazon.in/`)

/* Promise 3 stages :
1, Pending
2, Resolved
3, Rejected */



 })

 /* Config:          Script :    Chromium (msedge) 
 ----------
 chromium    ----->  Chromium (msedge)
 firefox     ----->  Chromium (msedge)
 webkit      ----->  Chromium (msedge)*/
