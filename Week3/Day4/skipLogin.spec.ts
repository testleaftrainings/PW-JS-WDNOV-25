

import { test } from "@playwright/test";

test.use({storageState:"Data/Login_LTY.json"})

test(`Lauch from home page`,async ({page}) => {
    
await page.goto("http://leaftaps.com/crmsfa/control/createLeadForm")

    console.log(await page.title());
    
})