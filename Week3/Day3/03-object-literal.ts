let firstName = 123


// let user = {
//     firstName : "Ravindran",
//     lastName : "R",
//     email : "support@testleaf.com"
// }

// console.log(user.firstName); // dot notation
// console.log(user.email);


let user : {
    firstName : string,
    lastName : string,
    "@email" : string
}={
     firstName : "Ravindran",
    lastName : "R",
    "@email" : "support@testleaf.com"
}

console.log(user["@email"]); // square bracket notation

