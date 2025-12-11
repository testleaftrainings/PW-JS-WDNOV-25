//Numeric Enum is the default enum

// enum TestResults {
// Pass,
// Fail,
// Skip
// }

// function logTestResult(result:TestResults){

//     console.log(`Test ${result}`);   

// }

// logTestResult(TestResults.Pass) // By default Pass value is numeric enum which is 0
// logTestResult(TestResults.Fail) // By default Pass value is numeric enum which is 1

//String Enum

enum BrowserType {
    Chrome = "chrome",
    Firefox="firefox",
    Edge = "msedge"
}

function launchBrowser(browserEngine:BrowserType){
    console.log(`launch browser using ${browserEngine}`);  

}

launchBrowser(BrowserType.Chrome)
launchBrowser(BrowserType.Edge)

//Heterogenous Enum

enum BrowserStatus {
Open,
Incognito,
Crash="Crashed",
Close=3,
Freeze
}

function reportBrowserStatus(status :BrowserStatus ) {
    console.log(`Current status of browser is ${status}`);
    
}

reportBrowserStatus(BrowserStatus.Open)
reportBrowserStatus(BrowserStatus.Crash)
reportBrowserStatus(BrowserStatus.Freeze)