const accountId = 134437;
let accountEmail = "suraj@gmail.com";
var accountPassword = "12345";
accountCity = "bangalore";
let accntState;

//accountId = 183738;   //not allowed

accountEmail = "dyeb@gmail.com";
accountPassword = "73978";
accountCity = "bengaluru";

/* 
   prefer to not use var keyword to declare variable as 
   it has some issues with scope and hoisting

*/

console.log(accountId);
console.table([accountId , accountEmail , accountPassword , accountCity , accntState]);