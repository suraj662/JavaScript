//prototypal bevarior of js
//function behaves as function and also as object
function multi5(num) {
    this.num = num;
    return num*5;
}

multi5.power = 2;

console.log(multi5(5));
console.log(multi5.power);
console.log(multi5.prototype);

function createUser(name, age) {
    this.name = name;
    this.age = age;
}

createUser.prototype.increase = function() {
    age++;
}

createUser.prototype.printMe = function() {
    console.log(`Name: ${this.name} , Age: ${this.age}`);
}

// const vt = createUser('kl', 21);
// const rt = createUser('rt', 25);

//gives access to properties and methods of createUser
//but show undefined for name and age because they are not defined in createUser.prototype
//bcoz vt doesnot get properties from createUser.prototype but from createUser function
//vt.printMe();


//to solve this ,we have to give new keyword --
const vt = new createUser('kl', 21);
const rt = new createUser('rt', 25);

vt.printMe();



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
