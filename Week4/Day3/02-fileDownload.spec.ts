import { test } from "@playwright/test";
import path from "path";


test(`File Download`,async ({page}) => {
    
    await page.goto(`https://leafground.com/file.xhtml`);

    const filePromise = page.waitForEvent('download')

    await page.getByText(`Download`,{exact:true}).click();

    const fDown = await filePromise

    //Option1 - Relative

  //  await fDown.saveAs("Data/NovWDPW.png");

 //   await fDown.saveAs(`Data/${fDown.suggestedFilename()}`); // suggestedFilename() == Actual filename


    //Option2 - Absolute (Recommended)

  //  await fDown.saveAs(path.join(__dirname,`../../../Data/AbsolutePath.png`));

  await fDown.saveAs(path.join(__dirname,`../../../Data/${fDown.suggestedFilename()}`));

    //Option3 - Download to D drive of your system

//    await fDown.saveAs("D:\\NovPWWDDownloadedTestleaf.png");





})