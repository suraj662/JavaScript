// let myName = 'suraj    ';
// //trueLength is not a property of string but we can add it to the prototype of string
// //means 
// console.log(myName.trueLength);

//prototypal bevarior of js--


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


//factory function
Object.prototype.suraj = function() {
    console.log('suraj is present in all objects');
};  

//heroPower.suraj();

//check in array it suraj available or not ?  yes
//myHeros.suraj();

//array have protoype property then --
Array.prototype.Hisuraj = function() {
    console.log('say hi to suraj');
};  

// myHeros.suraj();
// myHeros.Hisuraj();
//heroPower.Hisuraj(); //error because heroPower is not an array so it 
//doesnot have access to Array.prototype.Hisuraj() method


//inheritance in js --
//using __proto__ property we can achieve inheritance in js --

const user = {
    name: 'suraj',
    age: 21
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

//TeachingSupport inherit properties of Teacher
//using __proto__ 
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

//we acees this output using teacher in user --
Teacher.__proto__ = user; //Teacher inherit properties of user


//modern syntax --
//teachingSupport inherit properties of Teacher
Object.setPrototypeOf(TeachingSupport , Teacher);

let anotherUser = 'surajYadav';

String.prototype.trueLength = function() {
    console.log(`The string is ${this}`);
    //console.log(`The string is ${this}`); //error bcoz it is string object and not string primitive
    console.log(`Length of the string is ${this.length}`);
    console.log(`True length of the string is ${this.trim().length}`);
}

anotherUser.trueLength();
"suraj".trueLength();
"Choclate".trueLength();
