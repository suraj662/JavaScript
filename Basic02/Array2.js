const marvel_Heroes = ["thor" , "ironman" , "hulk" , "captain america" , "black widow" , "hawkeye"];
const dc_Heroes = ["superman" , "flash" , "batman" ];

//console.log(marvel_Heroes); //["thor" , "ironman" , "hulk" , "captain america" , "black widow" , "hawkeye"]

//marvel_Heroes.push(dc_Heroes);  //it will add the dc_Heroes array as an element in the marvel_Heroes array
//but it is not good practice to add an array in another array because 
// it will create a nested array and it will be difficult to access the element of the nested array

// console.log(marvel_Heroes); //["thor" , "ironman" , "hulk" , "captain america" , "black widow" , "hawkeye", ["superman" , "flash" , "batman"]]
// console.log(marvel_Heroes[6][1]);  //flash

//to solve this issue , we use concat method to merge two arrays into one array
const newVar = marvel_Heroes.concat(dc_Heroes); //it will merge the dc_Heroes array into the marvel_Heroes array and return a new array
//new

console.log(newVar); //["thor" , "ironman" , "hulk" , "captain america" , "black widow" , "hawkeye", "superman" , "flash" , "batman"]
console.log(newVar[8]); //"batman"


//spread operator is also used to merge two arrays into one array
const all_Heroes = [...marvel_Heroes , ...dc_Heroes]; //it will merge the dc_Heroes array into the marvel_Heroes array and return a new array
console.log(all_Heroes); //["thor" , "ironman" , "hulk" , "captain america" , "black widow" , "hawkeye", "superman" , "flash" , "batman"]

//to handle nested array we can use flat method to flatten the array
const another_Arr = [1,2,3,[4,,5,6] ,7,[6,7,[4,5]]];

const realanother_Arr = another_Arr.flat(2);  //2 is the depth of the nested array we want to flatten 
console.log(realanother_Arr); //[1,2,3,4,5,6,7,6,7,4,5]

//we can also use Infinity to flatten the array to any depth
const realanother_Arr2 = another_Arr.flat(Infinity);
console.log(realanother_Arr2); //[1,2,3,4,5,6,7,6,7,4,5]

//isArray method is used to check if the variable  or element of an array or not
console.log(Array.isArray("suraj")); //false


//convert string to array character , we use from method to convert string to array of characters
console.log(Array.from("suraj")); //["s","u","r","a","j"] 

//make array by using from method and pass an object with name property 
//it will return an array of characters of the name property value
console.log(Array.from({ name : "suraj" })); //[] it will return an empty array because it is not an iterable object

//convert multiple variable to element of an array using of method
let sc1 = 10;
let sc2 = 20;
let sc3 = 30;
console.log(Array.of(sc1,sc2,sc3)); //[10,20,30] it will return an array of the variable passed as arguments





