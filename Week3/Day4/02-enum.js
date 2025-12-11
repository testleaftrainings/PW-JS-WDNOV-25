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
var BrowserType;
(function (BrowserType) {
    BrowserType["Chrome"] = "chrome";
    BrowserType["Firefox"] = "firefox";
    BrowserType["Edge"] = "msedge";
})(BrowserType || (BrowserType = {}));
function launchBrowser(browserEngine) {
    console.log("launch browser using ".concat(browserEngine));
}
launchBrowser(BrowserType.Chrome);
launchBrowser(BrowserType.Edge);
//Heterogenous Enum
var BrowserStatus;
(function (BrowserStatus) {
    BrowserStatus[BrowserStatus["Open"] = 1] = "Open";
    BrowserStatus[BrowserStatus["Incognito"] = 2] = "Incognito";
    BrowserStatus["Crash"] = "Crashed";
    BrowserStatus[BrowserStatus["Close"] = 3] = "Close";
    BrowserStatus[BrowserStatus["Freeze"] = 4] = "Freeze";
})(BrowserStatus || (BrowserStatus = {}));
function reportBrowserStatus(status) {
    console.log("Current status of browser is ".concat(status));
}
reportBrowserStatus(BrowserStatus.Open);
reportBrowserStatus(BrowserStatus.Crash);
reportBrowserStatus(BrowserStatus.Freeze);
