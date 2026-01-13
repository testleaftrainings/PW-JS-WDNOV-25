import { test as baseT, Page} from "@playwright/test";

//baseT === test is used inorder to avoid confusion with the same name "test"

// type MyFixtures ={
//     page1:Page
// }

//export const test1 = baseT.extend<MyFixtures>({
export const test1 = baseT.extend({

page: async({page},use)=>{ 

await page.goto(`http://leaftaps.com/opentaps/control/login`);

await page.locator(`//input[@id="username"]`).fill(`demosalesmanager`);
await page.locator(`//input[@id="password"]`).fill(`crmsfa`);
await page.locator(`//input[@class="decorativeSubmit"]`).click()

await use(page)//Line seperates the beforehooks and afterhooks of test execution

//await page.close()

}

})



