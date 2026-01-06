import { test } from "@playwright/test";
import { createResource, fetchResource } from "./apiUtility";

test(`Learn to use Playwright Locators`,async ({page,request}) => {

await createResource(request)


let lname = await fetchResource(request) //Meaning of return keyword is get the lastname value "PlaywrightTrainer060126" and store it in lname


await page.goto(`https://login.salesforce.com/?locale=in`);

await page.getByLabel(`Username`).fill(`ravindran.ramdas@testleaf.com`)// label tag

//await page.getByRole(`textbox`,{name:"Username"}).fill(`ravindran.ramdas@testleaf.com`); // Accessibilty

await page.getByRole(`textbox`,{name:"Password"}).fill("Ravitestleaf#1234")

await page.getByRole(`button`,{name:"Log In"}).click();

await page.getByTitle(`App Launcher`,{exact:true}).click(); // attribute

await page.getByText(`View All`,{exact:true}).click(); // attribute

await page.getByPlaceholder(`Search apps or items...`,{exact:true}).fill("Leads") // attribute

await page.getByText('Leads',{exact:true}).click()

await page.getByPlaceholder(`Search this list...`).fill(lname)

await page.getByPlaceholder(`Search this list...`).press(`Enter`)

await page.waitForTimeout(3000)


})