/* Datatypes in TS:
1, number
2, string
3, boolean
4, undefined,
5, null
6, any --> similar to that of JS the variable can store any datatype
7.unknown
8. never
9. tuple */
var companayName = "Testleaf";
var data = "79870";
data = true;
data = "This is any datatype";
var value; // unknown is similar to that of any with mild strict typing 
value = 40;
value = "Hello";
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
