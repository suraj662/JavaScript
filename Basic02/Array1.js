//Array 
const myArr = [1,2,3,4,5];
const myArr2 = ["Superman", "Batman", "Spiderman"];
console.log(myArr[0]); //1
console.log(myArr2[1]); //Batman

//other way to create array
const myArr3 = new Array(1,2,3,4,5);
console.log(myArr3[2]); //3

//when we copy an Array it is not copy it is reference to the same array ,
//it is also called shallow copy

const myArr4 = myArr; //it is reference to the same array

//Array method in js-
console.log(myArr.length); //5
myArr.push(6); //add element at the end of the array
console.log(myArr); //[1,2,3,4,5,6]
myArr.push(7);
myArr.push(8,9); //add multiple element at the end of the array
console.log(myArr); //[1,2,3,4,5,6,7,8,9]
myArr.pop(); //remove last element of the array 
//o/p - [1,2,3,4,5,6,7,8]


//unshift and shift method used for add and remove element at the beginning of the array
//but it is time consuming operation 
//because it need to shift all the element to the right or left

myArr.unshift(0); //add element at the beginning of the array
console.log(myArr); //[0,1,2,3,4,5,6,7,8]
myArr.shift(); //remove element at the beginning of the array
console.log(myArr); //[1,2,3,4,5,6,7,8]

//includes method used to check if the element is present in the array or not
//returm in true and false
console.log(myArr.includes(9)); //false

//indexOf method used to find the index of the element in the array
//return -1 if the element is not present in the array
console.log(myArr.indexOf(9)); //-1
console.log(typeof myArr); //object

//join method used to join the element of the array into a string
//it return a string with the element of the array separated by a comma
const newArr = myArr.join(); 
console.log(myArr); //[1,2,3,4,5,6,7,8]
console.log(newArr); //1,2,3,4,5,6,7,8 in string format
console.log(typeof newArr); //string


//slice , splice 
console.log("A" , myArr); //we will use slice and splice method on myArr which is [1,2,3,4,5,6,7,8]
//slice method used to extract a portion of the array and return a new array
const myne = myArr.slice(1,3); //[2,3] it will extract element from index 1 to index 3 but not include index 3
console.log(myne); //[2,3]
console.log("B", myArr); //myArr is not changed it is still [1,2,3,4,5,6,7,8]

//splice method used to add or remove element from the array
const myne2 = myArr.splice(1,3); //it will remove element from index 1 to index 3 but not include index 3
console.log("C", myArr); //myArr is changed it is now [1,5,6,7,8]
console.log(myne2); //[2,3,4] it return the removed element in an array
