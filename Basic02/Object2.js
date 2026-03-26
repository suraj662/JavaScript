//const tinderUser = new Object();
//or 
const tinderUser = {};
//console.log(tinderUser);  //{}  empty object

//create propert of tinderUser
tinderUser.id = "123" ;
tinderUser.name = "suraj";
tinderUser.isLoggedIn = false;
//console.log(tinderUser);

//object inside object 
const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userName : {
            firstname : "suraj",
            lastname : "yadav"
        }
    }
}
//object nexting
console.log(regularUser.fullname); //{ userName: { firstname: 'suraj', lastname: 'yadav' } }
console.log(regularUser.fullname.userName); //{ firstname: 'suraj', lastname: 'yadav' }
console.log(regularUser.fullname.userName.firstname); //suraj

//optiinal chaining
//use ? to check object exist or not then provide if-else condition
console.log(regularUser.fullname?.userName.firstname); //suraj


const obj1 = {1 : "a" , 2 : "b"};
const obj2 = { 3 : "c" , 4 : "d"};
//same object inside object
const obj3 = {obj1 , obj2};
console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//or 
//use assign - merge or combine two or more object into one object
const obj4 = Object.assign({},obj1 , obj2);
console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//or 
//we use spread operator
const obj5 = {...obj1 , ...obj2}; //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj5);

//object declaration by []
const user = [
    {} ,
    {
        name:"suraj",
        email: "suraj@gmail.com"
    },
    {
        name : "pawan",
        email : "some@gmail.com"
    }

]
console.log(user[1].email);  //suraj@gmail.com - 1st index element as object


//to print all keys and  values of object -
console.log(tinderUser);  //{ id: '123', name: 'suraj', isLoggedIn: false }
console.log(Object.keys(tinderUser)); // 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //[ '123', 'suraj', false ]


//hasOwnproperty method to check key and value exist in object 
//if yes - return true , if not - return false
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //







