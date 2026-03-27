//scopes - {}

//var c=300;  //global scopes
if(true){  //inside {},variable is block scope
//let a = 10; //error
//const b =20;  //error
//var c = 30;   //no error - var can be used outside {}
//or
//c =30;  //by default detect var 
}


//console.log(b);
//console.log(c);  //30 

//var is old keyword of js , after update of ecmaScript 2015, 
//many changes came ,but var functionalities 
//didn't get change , it is same as it is now
//so,now var are avoided , due to this problem
//var is undentified for global and block scopes


//to solve this, avoided this -
let a =400;
if(true){  
    let a = 10; 
    const b =20;  
    console.log("inner",a);
    }
    //console.log(a);  //300 call global
    //after console.log("inner",a); in if scopes
    //console.log(a); // inner 10 400

    

    //scopes are different in browser and in node js

    //nexted scope
    function one(){
        const username = "suraj";

        function two(){
            const website = "youtube";
            console.log(username);
        }
        //console.log(website);  //error - website can't be accessed
        //bcoz it is not defined outside scope {} of function two
        two();
    }
    one();  //


    //in if-else
    if(true){
        const username = "suraj";

        if(username === "suraj"){
            const website = "youtube";
            console.log(username + website);
        }
        //console.log(website); //error-out of scope
    }
    //console.log(username); //error-out of scope



    //interesting 
    console.log(addone(3));  //4 function can be called before declaration
    function addone(num){
        return num + 1;
    }
    //or
    //addone(3);
    

    //in this case , declaration are different 
    //console.log(addtwo(5));  //error -bcoz function declared and store in variable,
    //due to hoisting,it is not allowed
    const addtwo = function(num){
        return num+2;
    }
    console.log(addtwo(5));  //7 correct 





