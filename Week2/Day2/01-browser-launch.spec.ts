//browser
//context ===> window + individual isolated (profile) + Incognito mode
//page


 // const browser = chromium.launch()

 // const context1 =  browser.newContext() // context1 == ravindran
 // const page1con1 =  context1.newPage()
 //page1con1.goto("amazon.com")

 // const page2con1 = context1.newPage()

  // const context2 = browser.newContext() // context2 == testofficial
 //const page1con2 = context2.newPage()

 //page1.goto("amazon.com")
 //page2.goto("flipkart.com")

 import { chromium, test } from "@playwright/test";


 test("Test to launch a browser",async ()=>{

const browser = await chromium.launch()
const context =  await browser.newContext()
const page = await context.newPage()

await page.goto(`https://www.amazon.in/`)



 })

async function funName(){

} 
funName()
