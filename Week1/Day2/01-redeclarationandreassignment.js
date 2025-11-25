
//Using var you can reassign and redeclare

//redeclaration
var username = 1231


//reassignment
var password = "Testleaf@123";
password = "Testleaf@345"

//let we cannot redeclare but we can reassign

//redeclaration
/* let accountBalance = 7987 // declaration is creating a memory space to store a value 
let accountBalance = 8979 */ // redeclaration is not allowed 

//reassign
let accountBalance = 7987
accountBalance = 8979 

//const we cannot redeclare also cannot reasign

//redeclaration
/* const accountNumber = 879879877
const accountNumber = 87870709 */

//reassign
const accountNumber = 879879877
accountNumber = 87870709 
console.log(accountNumber);// Error showw up during execution / runtime
