import { chromium, Page } from "@playwright/test"

class LoginPage{

  page : Page // Setting page instance globally so that all the methods can use this instance 

    constructor(Tpage:Page){ // Parameterized constructor
         this.page=Tpage // Tpage is the instance of the page in a browser 
    }

async loadurl(url:string){ // url is a local variable to get the argument passed `http://leaftaps.com/opentaps/control/main`
await this.page.goto(url)

}

async enterCredentials(username:string,password:string){
await this.page.locator("#username").fill(username)
await this.page.locator("#password").fill(password)
}

async clickLogin(){
await this.page.locator(".decorativeSubmit").click()
}

async closeBrowser(){
    await this.page.close()
}
}

async function doLogin(){

const browser = await chromium.launch({headless:false})
const context =  await browser.newContext()
const page = await context.newPage()

const login = new LoginPage(page)
await login.loadurl(`http://leaftaps.com/opentaps/control/main`)
await login.enterCredentials(`demoCSR2`,`crmsfa`)
await login.clickLogin()
await login.closeBrowser()

}

doLogin()