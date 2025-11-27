

/* String declaration - "",'',`` */

/* 1.String literal
2. Object literal */

//String literal :

let companyName = "Testleaf" // Address 100
let firmName = "Testleaf" // Address 100

console.log(companyName===firmName); // true

//Object Literal

let companyNameNew = new String("Testleaf") // First memory space created for object literal 101
let firmNameNew = new String("Testleaf") // Second memory space is also created during object literal 102

console.log(companyNameNew===firmNameNew); // false

//String Methods :

//Escape sequence : \ ,\n,\t

// let testEsc = 'it\'s a regression \n testing'
// console.log(testEsc);

// let testEscDbl = "Hello \t this is a \"double quote\""
//console.log(testEscDbl);

//concatenation -- concat()
//+

// let testCase = "create a new lead"
// let testCaseId = 123

// let resultCOncat = testCaseId.concat(testCase)
// console.log(resultCOncat);

// let resultCOncat = testCaseId.toString().concat(testCase)
// console.log(resultCOncat);

// let resultPlus = testCaseId+"-"+testCase+" passed in the execution"
// console.log(resultPlus);


//Template Literal -> `${}`

// function funName(Tcases){   
//     let output = `There are ${Tcases} testcases`
//     console.log(output);  
// }
// funName("400")

function funName(Tcases) {   
    let output = `There are ${Tcases} testcases`;
    console.log(output);  
}

// Get value from terminal
let inputValue = process.argv[2];  // argument at index 2

funName(inputValue);


let course = "Playwright"

//length - property

//Counting the string by the number of characters inside the string

console.log(`The length of the string is ${course.length}`);

//charAt()

console.log(`The charAt of 2 of the string is ${course.charAt(2)}`);

//indexOf()

console.log(`The indexOf() "a" is ${course.indexOf('a',2)}`);

//Slice()

//Substring()


