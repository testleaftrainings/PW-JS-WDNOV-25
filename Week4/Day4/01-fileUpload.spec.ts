import { test } from "@playwright/test";
import path from "path";

//Scenario 1 : We have type=file in the DOM

test(`File Upload with type="file"`,async ({page}) => {
    
    await page.goto(`https://leafground.com/file.xhtml`);

    const uploadFile = page.locator(`(//input[@type="file"])[1]`);
    
    await uploadFile.setInputFiles(path.join(__dirname,`../../../Data/AbsolutePath.png`))
    
    await page.waitForTimeout(3000);

})


test(`File Upload with type="file" for multiple files`,async ({page}) => {
    
    await page.goto(`https://leafground.com/file.xhtml`);

    const uploadFile = page.locator(`(//input[@type="file"])[2]`);
    
    await uploadFile.setInputFiles(["Data/qeagle-logo.png","Data/Testleaf-logo.png"])
    
    await page.waitForTimeout(3000);

})

//Scenario 2 :When we don't have type=file in the DOM

test.only(`File Upload with no type="file"`,async ({page}) => {
    
    await page.goto(`https://the-internet.herokuapp.com/upload`);

    const filePromise = page.waitForEvent('filechooser')

    await page.locator(`//div[@id="drag-drop-upload"]`).click();

    const fileUpload = await filePromise

    await fileUpload.setFiles("Data/Testleaf-logo.png")

    await page.waitForTimeout(3000);

})

/* Classroom Activity:

1, Upload multiple files from the root folder to the application where you don't have type=file as an attributeusing absolute path.*/