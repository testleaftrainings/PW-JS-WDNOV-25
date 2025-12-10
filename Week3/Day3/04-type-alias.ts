

let username : string | number // union type

username = "support@testleaf.com"
username = 908098

//alias name for datatype
type productDatatype = number | string | boolean

let accountNUmber : productDatatype = 8098
accountNUmber="#12412"
accountNUmber=true

//alias name for values
type supportedBrowser = "Chrome" | "Firefox" | "msedge"

function invokeBrowsers(browserName:supportedBrowser) {
    
if(browserName==="msedge"){
    console.log("Launch msedge");    
}else {
    console.log("Firefox");
    
}

}
invokeBrowsers("msedge")
