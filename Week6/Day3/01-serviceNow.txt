//POSTMAN API Tesing in Service Now :

/* endpoint,
CRUD OPeration -> POST, GET, PATCH,DELETE
Auth
Headers
Request Body */


import { expect, test } from "@playwright/test";
import { log } from "console";
let id : any //Global variable declaration, explicit inference with any datatype

test.describe.serial(`Service Now`,async()=>{

test(`Creating Incident using Playwright with API`, async ({ request }) => {

    const response = await request.post(`https://dev291487.service-now.com/api/now/table/incident`,

        {
            headers: {
                "Authorization": "Basic YWRtaW46QjdoL1E3T3dqYy9C",
                "Content-type": "application/json"
            },
            data: {
                "short_description": "Email not working via Playwright API Call-Ravindran",
                "description": "User cannot send or receive emails",
                "comments": "Updated via Playwright API Call-Ravindran",
                "work_notes": "Checked mail server logs",
                "subcategory": "Email",
                "impact": "2",
                "urgency": "2"

            }
        }
    )
    const responseBody = await response.json()
    console.log(responseBody);

    //Assert Status code
    console.log(response.status())// 201
       expect(response.status()).toBe(201)

    //Asser Status text
    console.log(response.statusText())// Created
       expect(response.statusText()).toBe("Created")  

    id = responseBody.result.sys_id
    console.log(id);    
})



test(`Fetch the created incident using playwright with API`,async ({request}) => {

    const response = await request.get(`https://dev291487.service-now.com/api/now/table/incident/${id}`,
        {
            headers:{
                "Authorization": "Basic YWRtaW46QjdoL1E3T3dqYy9C",
                "Content-type": "application/json"
            }
        }
    )

    const res = await response.json()
    console.log(res);    
    
})

})