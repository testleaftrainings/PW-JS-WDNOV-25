import { test } from "@playwright/test";


test(`Handling tabs using sequential way of handling window`,async ({page,context}) => {
    
await page.goto(`https://www.flipkart.com/`);

 const searchBox = page.getByPlaceholder(`Search for Products, Brands and More`,{exact:true})

 await searchBox.fill("Phone");

 await searchBox.press("Enter")

  const newPage =context.waitForEvent('page'); //Enable the event listener // Ebent listener to capture the new page that got poped up
 
 await page.locator(`//div[text()="POCO C71 (Desert Gold, 128 GB)"]`).click() // After this click a new page is poped up

 const childPage = await newPage;

 /* page is parent page reference
 child page is the reference of the new poped up page */
    
 })

