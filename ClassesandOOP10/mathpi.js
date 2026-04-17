//getOwnPropertyDescriptor() method returns a property descriptor for an own property 
//(that is, one directly present on an object and not in the object's prototype chain) of a given object.
//Object.getOwnPropertyDescriptor();

//try to overwrite math.pi value , but not possible bcoz it is a read only property
// console.log(Math.PI);
// Math.PI =  4;
// console.log(Math.PI); //3.141592653589793

//it shows writable: false because it is a read only property and cannot be changed
const descripter = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descripter);


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

//using defineProperty we can change the property descriptor of any property of an object --
Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}


//for more details about object to stop iteratable , confirguation , enumerable, writable, getOwnPropertyDescriptor, defineProperty, etc.
//site - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
