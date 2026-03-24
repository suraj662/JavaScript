const score = 400;

const balance = new Number(100);
console.log(balance); //specifically defined a number which is object
//this number give many functionlaties as number

console.log(balance.toString()); //100 now type is object to string  
console.log(balance.toString().length); //3 
console.log(balance.toFixed(2)); //100.00

const otherNumber = 123.8966; 
console.log(otherNumber.toPrecision(3)); //124

const hundred = 1000000;
console.log(hundred.toLocaleString()); //1,000,000 write in number american standard
console.log(hundred.toLocaleString('en-In')); //10,00,000 write in Indian standard

//in Js number number have method like max , min etc and many more 




//--------------------------Maths ---------------------------------------------

console.log(Math); //Object [Math] {}
console.log(Math.abs(-4)); //4 make value absolute - to + and + to +
console.log(Math.round(4.7)); //5
console.log(Math.ceil(4.2)); //5 top close value
console.log(Math.floor(4.2)); //4 down close value
console.log(Math.floor(4.9)); //4 down close value


//random method -- 
console.log(Math.random()); //any value b/w 0 - 1 
console.log(Math.random()*10); //any value b/w 0 - 9
console.log(Math.random()*10 +1); //any value b/w 1 - 9


//formula to get number b/w random min and max
const min = 10;
const max = 20;
// random number b/w min to max
console.log(Math.floor(Math.random() * (max - min + 1) + min)); 
