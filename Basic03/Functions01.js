//functions is a block of statement which store in package 
//it can used,copy or for any operation is called functions in js
//or
//In JavaScript, a function is a reusable block of code designed 
//to perform a particular task. It is executed when "something" invokes it (calls it).

function sayMyname() {
    console.log("s");
    console.log("u");
    console.log("r");
    console.log("a");
    console.log("j");
};
//sayMyname; //call the reference of function
//sayMyname(); //now call the function


//add two number
// function addTwonum (number1 , number2){
//     console.log(number1 + number2);  //only print the value
// };
// addTwonum();  //NaN -didn't pass any argument
// addTwonum(3 , 4); //7
// addTwonum(3 ,"4"); //34 - string type
// addTwonum(3 , null); //3 

//we can store function value in variable
//const res = addTwonum(3 , 5);  //8
//
//console.log(res); //undefined

//or
//store the value
function addTwonum (number1 , number2){
    // let res = number1 + number2;
    // return res;
    //or
    return number1 + number2;
};
const res = addTwonum(3 , 5); 
console.log(res); //8 -didn't get undefined this time because we not ask for console.log()


// function loginUserMesaage(username){
//     return `${username} just logged in`;
// };
// loginUserMesaage("suraj"); //return nothing,bcoz it didn't print and store thhe value
// console.log(loginUserMesaage("suraj")); //suraj just logged in
// console.log(loginUserMesaage());  //undefined just logged in -bcoz we didn't pass any argument in this method



function loginUserMesaage(username = "sam"){ //pass a default value if no value get passed

    if(username === undefined){
        console.log("please enter userName");
        return;
    }
    return `${username} just logged in`;
}
console.log(loginUserMesaage());  //undefined


//passing to many argument in functions, but write only one paramenter
// function calculateCarPrice(num1) {
//     return num1;
// };
// console.log(calculateCarPrice(1,2,3,4)); //1 ,but show only 1 

//to solve , we use rest operator (....)
// function calculateCarPrice(...num1) {
//     return num1;
// };
// console.log(calculateCarPrice(1,2,3,4));  //[ 1, 2, 3, 4 ]


function calculateCarPrice(val1 , val2 ,...num1) {
    return num1;
};
console.log(calculateCarPrice(1,2,3,4)); //[3,4] - show only last two element of val1,val2


//pass object as parameter in function
const user = {
    name: "suraj",
    price : 199
}


//typesafty required -means same name which are in object
function handleObject(anyObject){ //passing object as generic
   console.log(`username is ${anyObject.name} and price is ${anyObject.price}`);
};
//compulsary to pass user as argument
handleObject(user); //username is suraj and price is 199

//or

handleObject({
    name: "pawan",
    price : 399
});      //username is pawan and price is 399


//passing array in functing
const mynewArray = [100 ,200,300,400];
function returnSecondValue(getArray){
    return getArray[1];
};
console.log(returnSecondValue(mynewArray)); //200

