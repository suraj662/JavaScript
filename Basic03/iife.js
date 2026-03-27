//IIFE - immediately invoked function expression
//IIFE is a function that is defined and immediately invoked. 
//It is a common pattern in JavaScript to create a new scope and 
//avoid polluting the global namespace.

// function chai() {
//     console.log("DB connected");
// };  //() - invoke the function immediately after defining it
//but it is not IIFE because it is not in expression form, 
//it is in declaration form

//chai(); //DB connected

//or using IIFE
// (function chai() {
//     console.log("DB connected");
// })();  //DB connected

//syntax of iife -
// (function () {
//     //code here
// })();

//why we use IIFE ? -
//sometime due to global scope create pollution, 
//we want to create a new scope and avoid polluting the global namespace,

//pollution - when we have too many variables and functions in the global scope, 
//it can lead to naming conflicts and make it difficult to manage and maintain the code.


//IIFE using arrow function -
//example - 
//1. in this case, we got error,IIFE doesn't know where to stop 
// (function chai() {
//     console.log("DB connected");
// })()

// ( () => {
//     console.log("DB connected two");
// }() 

//2 in this case, we got correct output, 
//bcoz we wrap the function with semicolon and parenthesis, 
//so it know where to stop

//named IIFE -
(function chai() {
    console.log("DB connected");
})();

//unnamed IIFE -
( () => {
    console.log("DB connected two");
})();
//o/p - DB connected
//      DB connected two

 //with parameter and argument in arrow function using IIFE
 ( (num) => {
    console.log(`DB connected two ${num}`);
})('suraj'); //argument passed in IIFE
//o/p - DB connected two suraj








