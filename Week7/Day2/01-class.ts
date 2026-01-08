
class Browser {
    //Properties

    browserinfo = "Chrome"
    browserVersion = 111

    //Methods --> Actionables

    launchBrowser() {
        console.log("Launching Chrome");
      }

    loadingPage() {
        console.log("Loading to Login Page");
    }
}

const browser = new Browser() // Syntax to create an object using class name
browser.launchBrowser()
browser.loadingPage()

console.log(browser.browserVersion)
console.log(browser.browserinfo)

