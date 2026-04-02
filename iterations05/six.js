const myNum = [1,2,3,4,5,6,7,8,9,10];

//const newNum = myNum.map( (num) => num+10  );
//or
//it return undefined 
//const newNum = myNum.map( (num) => {num+10}  );
//console.log(newNum);

//map chaining --
// const newNum = myNum
// .map( (num) => num+10 )
// .map((num) => num*2 );
// console.log(newNum);

//using filter --
//print number > 29 
const newNum = myNum
.map( (num) => num+10 )
.map((num) => num*2 )
.filter( (num) => num > 29);
console.log(newNum);