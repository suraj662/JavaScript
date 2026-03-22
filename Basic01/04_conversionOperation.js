let value = 3;
let negValue = -value;
console.log(negValue); //assign negative value to negValue variable. so it will print -3

//basic math operations in js -
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);


//basic string concatenation in js -
let str1 = "hello";
let str2 = " suraj";
let str3 = str1 + str2;
console.log(str3);

//not prefer to code like this because it is not readable and 
//can cause confusion in future.
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log(1 + 3 * 2 / 4 % 6); //use parenthesis to make it more readable and avoid confusion in future.

//console.log(true);
//bad practice in js - 
//console.log(+true);  //1
//console.log(true+); //error - SyntaxError: Unexpected token '+'
//console.log(+""); //0

//bad practice in js -
// let num1 , num2 , num3 ;
// num1 = num2 = num3 = 2+2 ;

//prefix and postfix increment and decrement operator in js -
let gameCounter = 100;
gameCounter++;
console.log(gameCounter); //101

++gameCounter;
console.log(gameCounter); //102 


//for more understanding of conversion , read this - 
//https://tc39.es/ecma262/2023/multipage/abstract-operations.html#sec-type-conversion
