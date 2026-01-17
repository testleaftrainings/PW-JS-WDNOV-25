

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

/**************************************************************************************/
//String Methods :

//Escape sequence : \ ,\n,\t

let testEsc = 'it\'s a regression \n testing'
console.log(testEsc);

let testEscDbl = "Hello \t this is a \"double quote\""
console.log(testEscDbl);


//concatenation -- Using concat() method and "+"

let testCase = "create a new lead"
let testCaseId = 123

let resultConcat = testCaseId.concat(testCase)
console.log(resultConcat);

let resultConcatToString = testCaseId.toString().concat(testCase)
console.log(resultConcatToString);

let resultPlus = testCaseId+"-"+testCase+" passed in the execution"
console.log(resultPlus);


//Template Literal -> `${}`

function funName(Tcases){   
    let output = `There are ${Tcases} testcases`
    console.log(output);  
}
funName("400")

function funNameArgTer(Tcases) {   
    let output = `There are ${Tcases} testcases`;
    console.log(output);  
}

// Get value from terminal
let inputValue = process.argv[2]; //20 // argument at index 2 // from terminal type : node filename.js value

 funNameArgTer(inputValue);



let course = "Playwright"

//length - property

//Counting the string by the number of characters inside the string

console.log(`The length of the string is ${course.length}`);

//charAt()

console.log(`The charAt of 2 of the string is ${course.charAt(2)}`);

//indexOf()

console.log(`The indexOf() "a" is ${course.indexOf('a',2)}`);

//Slice()

let courseName = "Playwright"; 
let outputSlice = courseName.slice(2,5) //ayw
//let outputSlice = courseName.slice(5,2) // o/p "blank" not allowed as start index shouls not be greater than last index
console.log(outputSlice);

let outputSlice1 = courseName.slice(4,-2) //wrig
console.log(outputSlice1);

let outputSlice2 = courseName.slice(-6,-1) //wright
console.log(outputSlice2);


/* Note for slice:
1. start index included and end index is not included (also optional)
2. start index when greater than end index returns blank
3. Negative index is allowed
4. The start index and end index when swapped returns empty string hence NO SWAPPING*/


//Substring()

let outputSubstring = courseName.substring(3,5) // yw
console.log(outputSubstring);

let outputSubstring1 = courseName.substring(5,3) // yw
console.log(outputSubstring1);

let outputSubstring2 = courseName.substring(5,-3) // Playw
console.log(outputSubstring2);

/* Note for substring:

1. start index included and end index is not included also optional
2. start index when greater than end index returns blank
3. substring() does NOT allow negative indexes - Any negative value is treated as 0
4. The start index and end index when swapped returns the range of value hence SWAPPABLE*/









