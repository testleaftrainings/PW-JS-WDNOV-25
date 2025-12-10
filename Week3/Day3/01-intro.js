var y = 123; //equivalent to int x =123 in other programming languages
var z = 123; //  z is explicitly infered
var a = "String"; // a is implicity infered
function funNameAddRe(a, b) {
    // //return keyword means the funNameAdd(a,b)=c=a+b
    // let a =10;
    // let b =20;
    var c = a + b;
    return c;
}
console.log(funNameAddRe(10, 20)); //passing arguments while calling the function
