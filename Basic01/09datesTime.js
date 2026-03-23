//Dates
let myDate = new Date();
console.log(myDate);  //show current date and time 
console.log(myDate.toString()); //show current date and time in readable form
console.log(myDate.toDateString()); //current date and time
console.log(myDate.toLocaleString()); //MM/dd/YYY time AM/PM
console.log(typeof myDate); //object


//create or set new date and time
let myCreatedDate = new Date(2025 ,0,28);
console.log(myCreatedDate.toDateString()); //Tue Jan 28 2025

let myCreatedDt = new Date(2025,1,2, 3,6);
console.log(myCreatedDt.toLocaleString()); //2/2/2025, 3:06:00 AM

//other way
let mySet = new Date("2026-03-29");  //MM/dd/YYYY
console.log(mySet.toLocaleString()); //3/29/2026, 5:30:00 AM

//myTimeStamp 
//let myTimestamp = new Date();
//or
let myTimestamp = Date.now();
console.log(myTimestamp);  //in milisecond from startof timezone(large number)
console.log(mySet.getTime()); //time in milisecond from 1stJan to settime
console.log(Math.floor(Date.now()/1000)); //currentTime in second

console.log(myDate.getDate()); //currentDate only
console.log(myDate.getMonth() + 1); //currentMonth only

//using String Interpolation or backTICK ` `
console.log(`today month is ${myDate.getMonth() +1}`); //today month is 3


//using toLocalString() - you can defined object inside them 
//to get more customized time and date 
myDate.toLocaleString('default' , {
    weekday : "short",
    timeZone : "Asia/Kolkata" 
});