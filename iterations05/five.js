//foreach in array --
const myArr = ["js" , "python" , "java" , "c++" , "ruby"];

//callback function in array --
//callback function is a function that is passed as an argument to another function and
//is executed after some operation is completed.
//it donot have name and it is not called by us, it is called by the forEach method 
//after iterating over each element in the array

// myArr.forEach(function name (){
//     //print each element in the array --
//     console.log(name); //error - name is not defined
//     console.log(myArr); //it will print whole array in each iteration
    
// });
//convert to callback function --
// myArr.forEach(function (ele){
//     console.log(ele);
// });

//using arrow function --
// myArr.forEach( (ele)  => {
//     console.log(ele);
// });


//pass on function in array --
// function printEle(ele){
//     console.log(ele);
// }
// myArr.forEach(printEle);  //passing reference of function in forEach method  
//it will call printEle function for each element in the array and pass the 
//element as an argument to the function


//in arrow function --
//arrow have item, index ,array as parameter in forEach method --
// myArr.forEach( (ele , index , myArr)  => {
//     console.log(ele , index ,myArr);
// });




//objects inside array --
const users = [
    {name : "john" , age : 30},
    {name : "jane" , age : 25},
    {name : "bob" , age : 35}
]
//print name of each user --
// users.forEach( (user) => {
//     console.log(user.name);
// });

//store in variable--
// const values = users.forEach( (user) => {
//     console.log(user.name);
// });

//console.log(values); //undefined because forEach method donot return anything, 
//it is used for side effect only, it is not used to return value


//still give undefined but it will print name of each user in the console 
//because forEach method will call the callback function for each element 
//in the array and execute the code inside the callback function for each element in the array
// const values = users.forEach( (user) => {
//     console.log(user.name);
//     return user;
// });
// console.log(values); //undefined because forEach method donot return anything,

//undefined only bcoz forEach method donot return anything,
//it is used for side effect only, it is not used to return value
const values = users.forEach( (user) => {
    //console.log(user.name);
    return user;
});
//console.log(values); 



//filter operation in array-
//filter used for filtering the elements in the array
// based on some condition and return a new array with the filtered elements
//just like if-else condition but it is used for filtering the elements in the array
const myNum = [1,2,3,4,5,6,7,8,9,10];
//it will return a new array with only even numbers
//let newNums = myNum.filter( (num) => num % 2 == 0); 
//or
// let newNums = myNum.filter( (num) => { 
//     return num %2 ==0 ;
//  });

//or using forEach -
// const newNum = [];
// myNum.forEach( (num) => {
//     if(num % 2 == 0){
//         newNum.push(num);
//     }
// });
// console.log(newNum);



//in objects -
const myBook = [
    {title : "book1" , author : "author1" , year : 2000},
    {title : "book2" , author : "author2" , year : 2010},
    {title : "book3" , author : "author3" , year : 2020},
    {title : "book4" , author : "author4" , year : 1990},
    {title : "book5" , author : "author5" , year : 2005}
];

const userbook = myBook.filter( (bk) => {
    return bk.year >= 2000;

});

console.log(userbook);

