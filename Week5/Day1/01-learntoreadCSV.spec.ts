import  test  from "@playwright/test";
import  {parse} from "csv-parse/sync";
import fs from "fs" // fs --> file system to read data from your system

let records:any[]  = parse(fs.readFileSync("Data/login.csv"),{columns:true,skip_empty_lines:true})

//credentials = [{TC001},{TC002}] => [0,1]
for(let data of records){

test(`Learn to read data from JSON ${data.tcid}`,async ({page}) => {    

    await page.goto(`http://leaftaps.com/opentaps/control/login`);
    await page.locator(`//input[@id="username"]`).fill(data.username); //demosalesmanager , democsr
    await page.locator(`//input[@id="password"]`).fill(data.password);//crmsfa . crmsfa
    await page.locator(`//input[@class="decorativeSubmit"]`).click();

    await page.locator(`//a[contains(text(),"CRM")]`).click();

})

}


// /* 
// Before conversion in CSV :

// tcid,username,password
// 1,demoSalesmanager,crmsfa
// 2,demoCSR,crmsfa

// After conversion in JSON csv-parse converts CSV rows into objects, like this:

//    [
//      { 
//       tcid:1,
//       username: "demoSalesManager", 
//       password: "crmsfa" 
//       },
//      { tcid:2,
//       username: "demoCSR", 
//       password: "crmsfa" 
//       }
//    ]


