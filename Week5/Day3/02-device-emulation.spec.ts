import { test,devices } from "@playwright/test";

test.use({ ...devices['BlackBerry Z30'] })

test(`Emulate the devices`,async ({page}) => {
    
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.waitForTimeout(5000)
})