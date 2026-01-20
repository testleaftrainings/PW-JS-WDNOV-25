import { expect, test } from "@playwright/test";

test(`Learn Visual Regression Testing`,async ({page}) => {
    
    await page.goto(`https://www.flipkart.com/`);

    const ss = await page.screenshot(); // baseline image
    expect(ss).toMatchSnapshot()

})

test.only(`Learn Visual Regression Testing- Partial Image`,async ({page}) => {
    
    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    const ele = page.locator(`#username`);

    const ss1 = await ele.screenshot() // baseline image

    expect(ss1).toMatchSnapshot()

})



