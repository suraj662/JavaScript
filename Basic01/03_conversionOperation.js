let score =33 

//const (score) = req.body //donot know score assigned to which data type. 
//it is coming from user input. so it is string by default. 

console.log(typeof score); //number
    // or 
console.log(typeof(score)); //number

score = "33abc";  //score is now a string data type.
let valueInnumber = Number(score) 
//convert score string datatypes to number data type.
//Number is a class Based function in js 
//which is used to convert any data type to number data type.
console.log(typeof valueInnumber); //number 


console.log(valueInnumber); //NaN (Not a Number) because "33abc" cannot be converted to a valid number.

let scores1 = null;  ////score is now null data type.
console.log(typeof scores1); //Object
valueInnumbers = Number(scores1);  //convert score null datatypes to number data type.
console.log(typeof valueInnumbers); //Object (because null is considered an object in JavaScript)
console.log(valueInnumbers); //0  because null is converted to 0 when using Number() function.

//for conversion in string data type - 
//"33" - 33 
//"33ab" - NaN
// true - 1  false - 0


//conversion in boolean data type - 
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn); 
console.log(booleanIsLoggedIn); //true because 1 is considered true in boolean context.

isLoggedIn = "";
let booleanIsLoggedIn1 = Boolean(isLoggedIn); 
console.log(booleanIsLoggedIn1);  //false because empty string is considered false in boolean context.

//for conversion in boolean and string data type -
//1 - true
//0 - false
//"" - false
//"suraj" - true 


let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber); //33 - it lools like number 
console.log(typeof stringNumber); //string