//reduce in array --
//for more details - 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
//reduce is used to reduce the array to a single value by applying a function to each element of 
//the array and accumulating the result

const myArr = [1,2,3,4,5];

// const myTotal = myArr.reduce( (acc , currVal) => {
//     return acc + currVal;
// } ,0); //0 is the initial value of acc
// console.log(myTotal); //15

//or

//check how accumulator and current value change in each iteration --
// const myTotal = myArr.reduce( function (acc , currVal) {
//     console.log(`accumulator is ${acc} and current value is ${currVal}`);
//     return acc + currVal;
// } ,0); 

//or using arrow function 
// const myTotal = myArr.reduce(  (acc , currVal) => {
//     console.log(`accumulator is ${acc} and current value is ${currVal}`);
//     return acc + currVal;
// } ,0); 
//or 
const myTotal = myArr.reduce(  (acc , currVal) => acc + currVal , 0); 
console.log(myTotal); //15


//in object as itemname ,price 
const shoppingCart = [
    {itemName : "book" , price : 10},
    {itemName : "pen" , price : 5},
    {itemName : "notebook" , price : 20}
];
//total price 
const totaoPay = shoppingCart.reduce( (acc , item) => 
                            acc + item.price , 0);
console.log(totaoPay); //35                            