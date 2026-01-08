import { test } from "@playwright/test";
import { logADefectInJira } from "./after-hooks-jira-tickes";


test(`Test to records tracing of a bug`,async ({page}) => {
    
await page.goto(`https://login.salesforce.com/?locale=in`);

await page.getByLabel(`Username`).fill(`ravindran.ramdas@testleaf.com`)// label tag

//await page.getByRole(`textbox`,{name:"Username"}).fill(`ravindran.ramdas@testleaf.com`); // Accessibilty

await page.getByRole(`textbox`,{name:"Password"}).fill("RaviSalesforce#1234")

await page.getByRole(`textbox`,{name:""}).click();

await page.getByTitle(`App Launcher`,{exact:true}).click(); // attribute

await page.getByText(`View All`,{exact:true}).click(); // attribute

await page.getByPlaceholder(`Search apps or items...`,{exact:true}).fill("Leads") // attribute

await page.waitForTimeout(3000)

})

test.afterAll(async ({},testinfo) => {    
  //  console.log(testinfo.error);
  await logADefectInJira(testinfo)
    
})