//primitive dataypes in js -
//7 types -
//String
//boolean 
//number
//null
//undefined
//symbol - it is used to make any value unique 
//BigInt - for very large numbers


//reference pr non-primitive datatypes in js -
//Array
//Object
//Function

const score = true //boolean data type 
const oustsidetemp = null //it is empty value

//js is language defined loosely typed or dynamic typed language 
//because we do not need to specify the data type of variable at the time of declaration. 
//it automatically detects the data type based on the value assigned to it 

//js is statically typed language because once a variable is assigned a value of a certain data type,
// it cannot be changed to a different data type.


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); //false due to uniqueness of symbol data type in js. 
//even if the description is same but the value is different because it is unique.

const bigNumber = 1683682179278281836n; //automatically detects the data type as BigInt because of the 'n' at the end of the number.

const heroes = ["shaktiman", "nagraj", "doga"] //array data type in js

//object creation in js without name possible 
//but it is not good practice because it is not readable and 
//can cause confusion in future.


//not good practice in js - 
//or not allow to create object without name in js -
// {
//     name : "suraj",
//     age : 23 , 
// }


//so,for block of code , variable and function 
//declaration we need to use name for better readability 
//and to avoid confusion in future.
const myObj = {
    name : "suraj",
    age : 23 , 
} 


//function declaration in js -
//function stored in variable is called function expression in js -
let myfunc = function greet(name){
    return "hello " + name;
}
console.log(myfunc("suraj")); //hello suraj
console.log(typeof myfunc); //function or we can call objectFunction because in js function is also an object.

console.log(typeof Symbol);  //function because Symbol is a built-in function in js 
// which is used to create unique identifiers for objects.

// https://262.ecma-international.org/5.1/#sec-11.4.3



//-------------------------------------------------------------------------------------------------------------------


//memory allocation in js -
//stack and heap memory in js -

//stack memory - stores primitive data types in js 
//because they are of fixed size and can be accessed directly.

//heap memory - stores reference data types in js 
//because they are of variable size and cannot be accessed directly.


let myYoutube = "suraj"
let anotherName = myYoutube 
anotherName = "suraj yadav"

console.log(myYoutube); //suraj
console.log(anotherName); //suraj yadav because it copies the value of myYoutube to anotherName 
//and then changes the value of anotherName to "suraj yadav" 
// but it does not change the value of myYoutube because it is stored in stack memory and 
//it is a primitive data type in js.

let userOne = {
    email : "suraj@gmail.com",
    upid : "suraj@gml"

}
let userTwo = userOne //referencing the same object in heap memory
console.log(userOne.email); //call userOne reference variable in heap using stack memory
console.log(userTwo.email);  //call userTwo reference variable in heap using stack memory
