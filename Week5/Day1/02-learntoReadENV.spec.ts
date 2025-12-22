//  import  test  from "@playwright/test";
//  import dotenv from "dotenv"

//  let filename = process.env.envFile || "qa"    // either qa or prod use 

// dotenv.config({path:`Data/${filename}.env`}) // setting the environment qa.env


// test(`Learn to read data from ENV file`,async ({page}) => {    

//     // console.log(process.env.BaseUrl);
//     // console.log(process.env.LF_Username);
//     // console.log(process.env.LF_Password);

//     await page.goto(process.env.BaseUrl!);
//     await page.locator(`//input[@id="username"]`).fill(process.env.LF_Username as string); //demosalesmanager , democsr
//     await page.locator(`//input[@id="password"]`).fill(process.env.LF_Password as string);//crmsfa . crmsfa
//     await page.locator(`//input[@class="decorativeSubmit"]`).click();

//     await page.locator(`//a[contains(text(),"CRM")]`).click();

// })




console.log(process.env.Username);// System environment configuration will be taken
