//Arrow function in js -

//current context -
//current context of this keyword is different in arrow function and normal function
//in normal function this keyword refer to the object current property,
// but in arrow function this keyword refer to the global object

//let create normal object -
const user = {
    name : "suraj",
    age : 22,
    welcomeMessage : function(){
        console.log(`welcome ${this.name}`);  
        //after this
        console.log(this); 
     }
};
// user.welcomeMessage();  //welcome suraj after this { name: 'suraj', age: 22, welcomeMessage: [Function: welcomeMessage] }
// //change name property of user object
// user.name = "sam";
// user.welcomeMessage(); //welcome sam. after this { name: 'sam', age: 22, welcomeMessage: [Function: welcomeMessage] }
//this
//but i want to use this keyword outside the object, then we use arrow function

console.log(this); //{} bcoz we are in node environment, but in browser it will show window object
//in browser ,it shows -
// Window { 0: Window, window: Window, self: Window, document: document, name: '', location: Location, … }
//in browser - global object is window, but in node js global object is global


//this in function 
// function chai(){
//     let username = "suraj";
//     //console.log(this); //global object in node js
//     console.log(this.username); //undefined -bcoz this keyword refer to global object, 
//     //but username is not defined in global object
// }
//chai(); //global object in node js
//after this.username in function chai() - undefined
//chai(this); //undefined 


//store function in variable
// const chai = function(){
//     let username = "suraj";
//     console.log(this.username); 
    
// }
// chai(); //undefined

//or using arrow function
const chai = () => {
        let username = "suraj";
         //console.log(this.username); 
         //only this
         console.log(this);
        
     }
    //chai();  //undeined bc
    //after only this in chai()
    chai(); //{} 

    //more examples of arrow function -
    // const addTwo = (num1 ,num2) => {
    //     return num1 + num2;
    // }

    //or using implicit return - 
    //if we have only one line of code in function body, 
    //then we can remove return keyword and curly braces
    //const addTwo = (num1 , num2) => num1 + num2 ;
    //or
    // const addTwo = (num1 , num2) => (num1 + num2) ;
    
    //console.log(addTwo(3,5)); //8

    //for returning object in arrow function,
    const addTwo = (num1 , num2) => ({username : "suraj"});
    console.log(addTwo(3,5)); //{ username: 'suraj' }



    //for array -
    const myNewArr = [1,2,3,4,5,6,7,8];
    //to find even number in array using normal function
    myNewArr.forEach(function(num){
        if(num % 2 === 0){
            console.log(num);
        }
    });
    //or using arrow function
    myNewArr.forEach(num => {
        if(num % 2 === 0){
            console.log(num);
        }
    });


