// //Compound Assignment Operator

// let x=10;
// x+=5 // what this means x=x+5 (10+5)
// console.log(x);//x=15

// x-=5;// x=x-5 (15-5=10)
// console.log(x);//10

// x*=5;//x=x*5 (x=10*5=50)
// console.log(x);//50

//Post increment --> value++ => value+1

// let y=10
// console.log(y++); // y=10
// console.log(y);//y=11 

//Pre increment --> ++value 

// let z=10
// console.log(++z); // z=11
// console.log(z);//y=11

//Post decrement --> value-- => value-1

let y=10
console.log(y--); // y=10
console.log(y);//y=9

//Pre decrement --> --value 

let z=10
console.log(--z); // z=9
console.log(z);//z=9


/* Strict Equality "==="
1. Compare datatype and
2. COmpare the value */

/* Non-strict equality "==" (Loose Equality)
Compare the value and not the datatype
*/

console.log(1===1);//true
console.log(1==="1");//false
console.log("1"==1);//true because of loose equality also datatype gets converted from string 1 to number datatype 1 => type coercion

console.log(1==true);//true //internally means 1 , true =1 and false = 0 
console.log(1===true);//false






