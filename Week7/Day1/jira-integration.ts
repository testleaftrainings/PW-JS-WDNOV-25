import axios from "axios"

const endpoint = "https://manual-testing-demoproject.atlassian.net/rest/api/2/issue"
const username = "ravindranr90@gmail.com"
const password = "ATATT3xFfGF02OpV3ntDkVKT-M79BsvyKlM2bU7QLnSyS-Phh1xd16iksQ9hK1N_TAg6Gkl7t-WJqplKSVeHW3vJBHO1p0JeuX1GRYvRqo2zHNWfLCHgWG0NODNVvnFQtYLyhqBVoH6Q458SdOs18QB5Y5XgdkwuJdOaG2qSbzLr1-7e74jvrQk=80DB5BA9"

export async function createJiraIssue(summary:string,description:string){

    const issueRequestJson = {
    "fields":{
    "project":{
        "key":"NOV"
    },
    "summary":summary,
    "description":description,
    "issuetype":{
        "name":"Bug"
    }
}
    }

    await axios.post(endpoint,issueRequestJson,
        {
            auth:{
                username :username,
                password : password
            },
            headers:{
                'Content-Type':'application/json'
            }
        }
    )
}