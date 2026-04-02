//for of loop --
//in for of ,we donot need to use index to access the element, 
//it will directly give us the element
//it automatically detect where to end the loop 
//we donot need to specify the length of the array or string


// const myArr = [1,2,3,4,5,6];
// for(let ele of myArr){
//     console.log(ele);
// }


//iterate over each char --
// const myStr = "hello world";
// for(let char of myStr){
//     console.log(`each char is ${char}`);
// }


//maps in js --
//map is also an object in js but it is different from object literal --
//in map, object store as key value pair but in object literal,
// it is not necessary to store as key value pair
//didnot follow inserted order 
//for more details about map -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map


// const map = new Map();
// map.set("IN" , "India");
// map.set("US" , "United States");
// map.set("UK" , "United Kingdom");
// map.set("IN" , "India");  //duplicate key will overwrite the previous value
// //console.log(map);

// //or - print value in map --
// for(const key of map){
//     console.log(key);
// }
// //or 
// for(const [key , value] of map){
//     console.log(`key is ${key} and value is ${value}`);
// }


// object -
const myObj = {
    game1 : "cricket",
    game2 : "football",
    game3 : "hockey"
}
//give error - object is not iterable -
for(const [key,value] of myObj){
    console.log(key + "->" + value);
}

