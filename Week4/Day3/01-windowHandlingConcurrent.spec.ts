import { test } from "@playwright/test";


test(`Handling tabs using concurrent way of handling window`,async ({page,context}) => {
    
await page.goto(`https://www.flipkart.com/`);

 const searchBox = page.getByPlaceholder(`Search for Products, Brands and More`,{exact:true})

 await searchBox.fill("Phone");

 await searchBox.press("Enter")

 await page.waitForTimeout(6000)

//   const newPage = context.waitForEvent('page'); //Enable the event listener // Ebent listener to capture the new page that got poped up
 
//  await page.locator(`//div[text()="POCO C71 (Desert Gold, 128 GB)"]`).click() // After this click a new page is poped up

//  const childPage = await newPage;


await Promise.all([context.waitForEvent('page'),page.locator(`(//div[contains(text(),"POCO")])[1]`).click()])

const allPages =context.pages();

console.log(allPages.length);

console.log(await allPages[0].title()); // Title of parent page
 console.log(await allPages[1].title()); // Title of new Child Page

 await page.bringToFront(); // Bring parent page to the front

 await page.waitForTimeout(3000)
 await page.locator(`//span[text()="Electronics"]`).click();
    
 })


 test.only(`Handling Multiple pages`,async ({page,context}) => {
    
    await page.goto(`https://leafground.com/window.xhtml`);

     
    await Promise.all([context.waitForEvent('page'),page.getByText(`Open Multiple`,{exact:true}).click()])

    const allPages = context.pages();

    console.log(allPages.length);

    console.log(await allPages[0].title());

    console.log(await allPages[1].title());

    console.log(await allPages[2].title());    
    
 })
