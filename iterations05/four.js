//iteration in object -
const myObj = {
    game1 : "cricket",
    game2 : "football",
    game3 : "hockey"
}
//in object , we use for in loop --
//print key only --
for(const key in myObj){
    //console.log(key);
}
//print value only --
for(const key in myObj){
    //console.log(myObj[key]);
}
//print key and value --
for(const key in myObj){
   // console.log(`key is ${key} and value is ${myObj[key]}`);
}


//for in in Array --
const myArr = ["flash" , "batman" , "superman"];
for(const key in myArr){
    console.log(key); //key is index in array
    console.log(myArr[key]); //value is element in arrays
}
    