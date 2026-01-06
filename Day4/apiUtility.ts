import { APIRequestContext } from "@playwright/test";

let token: any
let inst_url: any
let tokenType: any
let id: any

export async function generateToken(request: APIRequestContext) {

    const response = await request.post(`https://login.salesforce.com/services/oauth2/token`,
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            form: {
                "client_id": "3MVG9VMBZCsTL9hnYaVamF_yN9dU9vnyYTjdMcnDvjqPwwaBINmmrxc5nreM3diNAwBKSsbWXhbOweaL8rdNB",
                "client_secret": "045B87EED90898F6D00920E973955E048E340B15506294A39847C4C824C8E260",
                "username": "ravindran.ramdas@testleaf.com",
                "password": "Ravitestleaf#1234",
                "grant_type": "password"
            }
        }
    )

    const responseBody = await response.json()
    console.log(responseBody);

    token = responseBody.access_token;
    inst_url = responseBody.instance_url;
    tokenType = responseBody.token_type;
}

export async function createResource(request: APIRequestContext) {

    await generateToken(request) // token,inst_url,tokenType getting ready when     await generateToken(request) // token,inst_url,tokenType getting ready when genrate


    const response = await request.post(`${inst_url}/services/data/v65.0/sobjects/Lead`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${tokenType} ${token}`
            },
            data: {
                "Salutation": "Mr.",
                "FirstName": "RavindranNovWD25",
                "LastName": "PlaywrightTrainer060126",
                "Company": "Testleaf"
            }
        }
    )

    const responseBody = await response.json()
    console.log(responseBody);

    console.log(response.status());

    console.log(response.statusText());

    id = responseBody.id

}

export async function fetchResource(request: APIRequestContext) {

    const response = await request.get(`${inst_url}/services/data/v65.0/sobjects/Lead/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${tokenType} ${token}`
            }
        }
    )

    const responseBody = await response.json()
    console.log(responseBody);

    console.log(response.status());
    console.log(response.statusText());

    return responseBody.LastName //PlaywrightTrainer060126



}