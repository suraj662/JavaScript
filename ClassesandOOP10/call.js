function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    //call used to call a function with a given this value and arguments provided individually
    //call used to acess another object propertiess explicitly
    //means we can use call to call a function and set this to any value we want
    SetUsername.call(this, username);
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);