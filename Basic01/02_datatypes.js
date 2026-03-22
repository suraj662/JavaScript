"use strict"; //treat all js code as newer version
//alert(3 + 3) // we are using node.js so alert is not defined. it is used in browser to show pop up message.
//not in browser .so it will give error if we use alert in node.js

//in js code we can write   ;  or not write  ;  at the end of line. 
//it is optional. but it is good practice to use ; 
//at the end of line to avoid any confusion or error in future.
//code readability should be good. it is good practice to use ; 
//at the end of line to avoid any confusion or error in future.
 console.log(3+3)
 console.log("suraj")

 let name = "suraj" //automatically detects the data type as string
 let age = 23 //automatically detects the data type as number ,
 // the range of number in js is from -(2^53 - 1) to (2^53 - 1)
 let isApproved = true //automatically detects the data type as boolean

// --- primitive data types in js ---
 //String - "" or ''
 //Number - 123 or 12.5
 //bigInt - for very large numbers
 //Boolean - true or false
 //null - standalone value that represents "no value" , in js it is an object
 //undefined - a variable that has been declared but not assigned a value
//symbol - a uniqueness identifier for objects ,mostly used in react js for keys in objects , 
//         example - like figma tools uses symbol to identify the uniqueness of objects in react js

//typeof -  operator is used to check the data type of a variable
console.log(typeof "suraj"); //String
console.log(typeof age); //Number
console.log(typeof null); //Object
console.log(typeof undefined); //undefined

console.table([typeof "suraj" , typeof age , typeof null , typeof undefined])


