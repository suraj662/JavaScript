//truthy values are values that evaluate to true in a boolean context. 
//In JavaScript, the following values are considered falsy:


//print true value console ,it detects string have some value --
//print false value console ,it detects string is empty --
const userEmail = "suraj@gmail";
if(userEmail){
    console.log("got user email");
}
else{
    console.log("email not found");
}



//falsy values --
//0 , -0 , 0n , "" , null , undefined , NaN ,BigInt 0n , false , boolean false

//truthy values --
//"0" , 'false' , [] , {} , function(){} , true , boolean true , " " ,


const emptyObj = {};
// if(emptyObj){
//     console.log("empty object is truthy");
// }

//or 

if(Object.keys(emptyObj).length === 0){
    console.log("empty object is truthy");
}

//in browser console also in node js console --
false == 0; //true 
false == '';
0 == ''; //true



//Nullish coelsion operator -- (??): null undefined
//unassigned variable is also undefined --
let val1;
//sometimes variable can be null or undefined --
//so, to avoid null or undefined value we can use nullish coelsion operator (??)
val1 = 5 ?? 10 ; //5 because it is not null or undefined
val1 = null ?? 10; //10 because it is null
val1 = undefined ?? 10; //10 because it is undefined
val1 = 0 ?? 10; //0 because it is not null or undefined
val1 = '' ?? 10; //'' because it is not null or undefined
val1 = false ?? 10; //false because it is not null or undefined
val1 = NaN ?? 10; //NaN because it is not null or undefined
val1 = null ?? null;  //null because it is null
val1 = undefined ?? undefined; //undefined because it is undefined
val1 = null ?? undefined; //undefined because it is null
val1 = undefined ?? null; //null because it is undefined
val1 = null ?? 10 ?? 20; //10 because after null it will check for next value which is 10 and it is not null or undefined


//ternary operator --
//syntax -- 
// condition ? expression1 : expression2

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("ice tea is affordable") : console.log("ice tea is expensive");


