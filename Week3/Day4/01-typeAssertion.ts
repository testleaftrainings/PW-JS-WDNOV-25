//Type Assertions :

//Two ways : <> angular bracket, using as keyword

let response :any  = 123 // When data comes from a data folder example .env, from DB, from an API call

let myResponse = <string> response

console.log(myResponse.toUpperCase());


