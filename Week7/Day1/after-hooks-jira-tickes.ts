import { TestInfo } from "@playwright/test";
import { createJiraIssue } from "./jira-integration";


export async function logADefectInJira(testinfo:TestInfo){

    if(testinfo.status==='failed' || testinfo.status==="timedOut"){

    const summary = `Test ${testinfo.status} : ${testinfo.title}`
    const description= `Here is the error description ${testinfo.error?.message}`//?. optional chaining to handle the error if it is NULL

    await createJiraIssue(summary,description)

    console.log(`Jira issue created using Playwright API call for ${testinfo.status} : ${testinfo.title}`);
    console.log(`Error message : ${testinfo.error?.message}`);     

    }else{
        console.log("The test is passed");        
    }
}