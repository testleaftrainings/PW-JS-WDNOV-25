import { test } from "@playwright/test";

test(`Network interception using Salesforce login`,async ({page}) => {


page.route(`**/aura?preloadActions`,async(route,request)=>{

    
  
      if(request.method()==='POST'){
        console.log(`Request URL: ${request.url()}`);
       console.log(`Request headers: ${JSON.stringify(request.headers(),null,2)}`);   
     // console.log(`Request headers: ${JSON.stringify(mockedResponse,null,2)}`);
     
     /* //const mockedResponse = {
     actions : [
     {
     id:"1",
     status:"SUCCESS",
     returnValue:{message:"This is a mocked response"}
     }]
     }  */
//JSON.stringify --> Converts the headers object into JSON string
//null,2 adds indentation for better readability
    }else{
        route.continue();//means it will continue if there are any other http methods other than "POST"
    }


})

await page.goto(`https://login.salesforce.com/?locale=in`);

await page.getByLabel(`Username`).fill(`ravindran.ramdas@testleaf.com`)// label tag

//await page.getByRole(`textbox`,{name:"Username"}).fill(`ravindran.ramdas@testleaf.com`); // Accessibilty

await page.getByRole(`textbox`,{name:"Password"}).fill("Ravitestleaf#1234")

await page.getByRole(`button`,{name:"Log In"}).click();

await page.getByTitle(`App Launcher`,{exact:true}).click(); // attribute

await page.getByText(`View All`,{exact:true}).click(); // attribute

await page.getByPlaceholder(`Search apps or items...`,{exact:true}).fill("Leads") // attribute

await page.waitForTimeout(3000)
    
})




// test(`Network interception using Salesforce login`,async ({page}) => {


// page.route(`**/aura?preloadActions`,async(route,request)=>{
  
//       if(request.method()==='POST'){
//         console.log(`Request URL: ${request.url()}`);
      
//      const mockedResponse = {
//      actions : [
//      {
//      id:"1",
//      status:"SUCCESS",
//      returnValue:{message:"This is a mocked response"}
//      }]
//      } 

//      console.log(`Mocked response :\n ${JSON.stringify(mockedResponse,null,2)}`);

//      await route.fulfill({
//         status:200,
//         contentType:"application/json",
//         body:JSON.stringify(mockedResponse)
//      });
//     }else{
//         await route.continue();
//     }
     
// //JSON.stringify --> Converts the headers object into JSON string
// //null,2 adds indentation for better readabilit
// })

// await page.goto(`https://login.salesforce.com/?locale=in`);

// await page.getByLabel(`Username`).fill(`ravindran.ramdas@testleaf.com`)// label tag

// //await page.getByRole(`textbox`,{name:"Username"}).fill(`ravindran.ramdas@testleaf.com`); // Accessibilty

// await page.getByRole(`textbox`,{name:"Password"}).fill("Ravitestleaf#1234")

// await page.getByRole(`button`,{name:"Log In"}).click();

// await page.getByTitle(`App Launcher`,{exact:true}).click(); // attribute

// await page.getByText(`View All`,{exact:true}).click(); // attribute

// await page.getByPlaceholder(`Search apps or items...`,{exact:true}).fill("Leads") // attribute

// await page.waitForTimeout(3000)
    
// })