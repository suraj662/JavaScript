//if statement
//syntax -- 
// if(condition){
//     //code to be executed if condition is true
// }

//if condition is true then only code inside 
//if block will be executed otherwise it will be skipped

//sometimes it used for comparison and decision making
//example - 
//< , > , <= , >= , == , === , != , !==
const isLoggedIn = true;
if(isLoggedIn){
    console.log('Welcome to the dashboard');
}

//or for decision making
//example -
//for check values and data types , we can use === and !==

// const score =200;
// if(score > 100){
//     const power = "fly";
//     console.log(`your power : ${power}`);
// }

//o/p - your power : fly

//but problem arise when we try to access power variable outside the if block
//console.log(`your power : ${power}`);
//o/p - ReferenceError: power is not defined



//not good practice --
//if(score > 100) console.log("test") , console.log("test1");


// let balance =1000;
// if(balance < 500){
//     console.log("less than 750");
// }
// else if(balance < 750){
//     console.log("less than 1000");
// }
// else{
//     console.log("greater than 1000");
// }



const isloggedIn = true;
const  debitCard = true;
//if all condition is true then only we can buy
if(isloggedIn && debitCard){
    console.log("you can buy");
}

const isLoggedFromGoogle = true;
const isLoggedFromEmail = false;
if(isLoggedFromGoogle || isLoggedFromEmail){
    console.log("you can login");
}


//renedering in react js --
//this type of condition also used for rendering in react js
//where user logout option is only show when user is logged in and have token

