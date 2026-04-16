//promises --
//A promise is an object that may produce a single value in the future: 
//either a resolved value or a reason that it’s not resolved (e.g., a network error occurred).
// A promise may be in one of 3 possible states: fulfilled, rejected, or pending. 
//Promises are used to handle asynchronous operations in JavaScript.

//Creating a Promise
const prom1 = new Promise(function(resolve , rejecte){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000);
});

//Consuming a Promise
prom1.then(function(){
    console.log('Promise consumed');
});

//or 

new Promise(function(resolve , rejecte){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task 2 is compelete');
        resolve()
    }, 1000);
}).then(function(){
    console.log('Promise 2 consumed');
});


//pass data come from network or db using promise
const prom3 = new Promise(function(resolve , rejecte){
    setTimeout(function(){
        console.log('Async task 3 is compelete');
        resolve({user:'suraj', age: 21})
    }, 1000);
});
//consume prom3
prom3.then(function(user){
    console.log('Promise 3 consumed');
    console.log(user);
});


const prom4 = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            console.log('Async task 4 is compelete');
            resolve({username:'suraj', age: 21});
        }
        else {
            console.log('Async task 4 is not compelete');
            reject('There is an error in prom4');
        }
    }, 1000);
});

//consume prom4
//use chaining of then and catch to handle success and error
//finally is used to execute code after promise is settled (either resolved or rejected)
prom4
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"));



//use async await --
const prom5 = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            console.log('Async task 5 is compelete');
            resolve({username:'Javascript' , pass : 123});
        }
        else {
            console.log('Async task 5 is not compelete');
            reject('ERROR : JS error');
        }
    }, 1000);
});

//consume prom5 using async await
async function consumeProm5(){
    try {
        const response = await prom5;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumeProm5();


// //get dummy data from jsonplaceholder using fetch and async await
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         //response take time to come so we use await to wait for the response to come and then we can use it
//         //then it convert the response to json format and return a promise so we use await again to wait for 
//         //the json data to come and then we can use it
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers();


//or using fetch and then
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log("E: ", error);
});


