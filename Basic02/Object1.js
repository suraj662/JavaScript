//singleton
//object made by constructor , not by literals 
Object.create 


//declare symbol -
//symbol can be used as object key
const mySm = Symbol("key1");

//object literal
//in js , object defined key and value  
//object declare --
const Juser = {
    name : "suraj",
    "fulll name": "Suraj Dev Yadav",   //can't access this without []
    age : 19 ,
    //mySm : "mykey1",   //can't overide the symbol
    [mySm] : "myKey1",  //now it refer symbol
    location : "bengalore",
    email : "suraj@gmail.com",
    isLoggedIn : false,
    lastLoggedIn : ["monday" , "saturday"]

}

console.log(Juser.email); //suraj@gmail.com
console.log(Juser["email"]); //suraj@gmail.com
//console.log(Juser."fulll name");  //error
console.log(Juser["fulll name"]);  //Suraj Dev Yadav

 console.log(Juser[mySm]); //mykey1
// console.log(typeof Juser.mySm); //string ,not symbol because it can't access be directly
//to access this mySm , use []
console.log(typeof Juser[mySm]); //string to access symbol,use []

//override the value --
Juser.email = "sumit@gmail.com" ; 
console.log(Juser.email); //sumit@gmail.com

//freeze - using this method, we can lock the value , no one can change it 
//also when try to override the object value , 
//didnot not show error , value didn't get changed
//Object.freeze(Juser);
Juser.email = "suraj@chat.com"
console.log(Juser.email); //sumit@gmail.com - value can't be changed once value lock by freeze method



//add function inside  object
Juser.greeting = function(){
    console.log("Hello Js User");
}
//console.log(Juser.greeting); //undefined - due freeze method 
//after comment the freeze method
//console.log(Juser.greeting); //[Function (anonymous)] - it is not a function,only the referencing the function , not executing that's why

console.log(Juser.greeting());  //undefined 


//add function using string interpolation
//using this we can refer object property 
Juser.greetingTwo = function(){
    console.log(`Hello Js User , ${this.name}`);
}
console.log(Juser.greetingTwo());  //undefined 






