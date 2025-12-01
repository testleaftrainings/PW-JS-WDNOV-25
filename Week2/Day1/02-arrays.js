// /* Arrays in JavaScript

// 1. Dynamic in Size
// Arrays grow and shrink in size as elements are added

// 2. Heterogenous:
// Arrays in JS can store different datatypes like number,string, boolean*/

// /* 1.push()-->add element to the end of the array */

// let letters = ["a","b","c","d","e"]
// // letters = ["a","b","c","d","e","f","g","h"]
// letters.push("f","g","h")
// console.log(letters);

// /* [
//   'a', 'b', 'c',
//   'd', 'e', 'f',
//   'g', 'h'
// ] */

//   /* 2,pop() --> remove only one from the end of the array */

//   letters.pop()
//   console.log(letters);
 
//   /* [
//   'a', 'b', 'c',
//   'd', 'e', 'f',
//   'g'
// ] */
  
// //3. unshift() -> add one or more elements to the begining of the array

// letters.unshift("x","y","z")
// console.log(letters);

// /* [
//   'x', 'y', 'z', 'a',
//   'b', 'c', 'd', 'e',
//   'f', 'g'
// ] */

// /* 4. shift() --> remove only one element from the first part of the array */

// letters.shift()
// console.log(letters);

/* [
  'y', 'z', 'a',
  'b', 'c', 'd',
  'e', 'f', 'g'
] */


//slice()
//Extracts the section of an array without modifying the original array
//arrays.slice(startIndex,endIndex)

/* 
"a"->0
"b"->1
"c"->2
"d"->3 
"e"->4
*/

let arrayVal = ["a","b","c","d","e"] 

const result = arrayVal.slice(1,3)
console.log(result); //[ 'b', 'c' ]

//splice() --> add or remove the elments from the array
//array.splice(startIndex,deleteCount,ele1,ele2)

arrayVal.splice(1,3,"x","y","z")
console.log(arrayVal); //[ 'a', 'x', 'y', 'z', 'e' ]

arrayVal.splice(2,3,"x","y","z")
console.log(arrayVal); //[ 'a', 'b', 'x', 'y', 'z' ]

//concatenation

//spread syntax(...)

let numbers1 = [1,2,3,4];
let numbers2= [5,6,7,8,9]

let spreadSynt = [...numbers1,...numbers2]
console.log(spreadSynt);
/* [
  1, 2, 3, 4, 5,
  6, 7, 8, 9
] */

let concatArray = numbers1.concat(numbers2)
console.log(concatArray);

//sort array 

let numberArray = [10, 8, 9, 7]
numberArray.sort(); //[ 10, 7, 8, 9 ]
console.log(numberArray);

/* numberArray.sort((a,b)=>a-b); // ascending
console.log(numberArray);//[ 7, 8, 9, 10 ] */

 numberArray.sort((a,b)=>b-a); // descending
console.log(numberArray); //[ 10, 9, 8, 7 ]
//[10,7,8,9].sort((a,b)=>a-b)



