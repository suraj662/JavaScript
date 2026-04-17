//ES6 --
//in js , class is syntactic sugar over constructor functions and prototypes -- 
//it provides a cleaner and more intuitive syntax for creating objects and handling 
//inheritance, but under the hood, it still uses the same prototypal inheritance model as before. 
//So, while classes in JavaScript may look like traditional classes in other programming languages, 
//they are essentially a more convenient way to work with constructor functions and prototypes.


// class User{

//     constructor(username , email ,password){
//         this.username = username;
//         this.email = password;
//         this.password = password ;
//     }

//     encryptPassword(){
//         return `${this.password}abc`;
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const newUser = new User('suraj' , 'suraj@gmail.com'  , 123);
// console.log(newUser.encryptPassword());
// console.log(newUser.changeUsername());


//behind the scenes 
function User(username , email ,password){
    this.username = username;
    this.email = password;
    this.password = password ;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`;
}

const newUser = new User('suraj' , 'suraj@gmail.com'  , 123);
console.log(newUser.encryptPassword());
console.log(newUser.changeUsername());