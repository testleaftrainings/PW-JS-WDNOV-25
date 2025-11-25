//Scoping in JS

const { log } = require("node:console");

//var is function scope

//var companyName = "Testleaf" // Global declaration

/* if (true) {
    var companyName="Testleaf"
    console.log("Accessing var inside the if block",companyName);    
}
  console.log("Accessing var outisde the if block",companyName); */ 

//let companyName = "Testleaf" // Global declaration

/* if (true) {
    let companyName="Testleaf"
    console.log("Accessing let inside the if block",companyName);    
}
  console.log("Accessing let outisde the if block",companyName); // refrence error--> not accesible outside the block */

//const companyName = "Testleaf" // Global declaration

// if (true) {
//     const companyName="Testleaf"
//     console.log("Accessing const inside the if block",companyName);    
// }
//   console.log("Accessing const outisde the if block",companyName);// refrence error--> not accesible outside the block 


  //function scoped:
    //var is function scoped

//   function greet(){
//     var message ="Hello Team"

//     console.log("Accesing the var inside function scope",message);  // inside function 
    
//     if (true) {
//      console.log("Accessing var inside the if block",message); //inside if block   
//     }

//   }
// console.log("Acessing var outside the function",message);//outside the function scope var is not accessible

//   greet()

    //let is function scoped + block scoped

  function greet(){
    let message ="Hello Team"

   // console.log("Accesing the let inside function scope",message);  // inside function let is accesible
    
    if (true) {
    let messgeNew = "Good evening"
    console.log("Accessing let inside the if block",message); //inside if block let is accessible  
    }
    console.log("Accessing let outside the is block",messgeNew);
    
  }
//console.log("Acessing let outside the function",message);//outside the function scope var is not accessible

  greet()