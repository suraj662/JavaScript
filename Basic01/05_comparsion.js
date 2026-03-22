//basic comparsion in js - 
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//string comparsion with number in js -
// console.log("2" > 1);
// console.log("02" > 1);

//bad practice in js -
// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true because in comparsion null treated as 0 but in equality check null is not equal to 0. 
//so it will return false.

// console.log(undefined == 0); //false
// console.log(undefined > 0); //false 
// console.log(undefined < 0); //false




//good practice in js -
//=== strict equality operator in js - it checks for both value and data type.
console.log("2" === 2);
