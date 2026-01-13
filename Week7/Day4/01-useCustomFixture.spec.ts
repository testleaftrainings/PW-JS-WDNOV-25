
//Best practice is to use test instead of "test1"

import { test1 } from "./fixture";

test1(`Using Custom Fixture`, async ({ page }) => {


    console.log(await page.title());
    

})

/* page fixture --> It is giving the instance of the page directly from the playwright library */