//for strings, we can use single or double quotes, 
// but we have to be consistent.
//" " or ' ' , but now it is not good practice in js 

//for backticks, we can use template literals in js ` `  - 
//in mac ` `  - option + keybutton before number 1 key - keyboard shortcut for backticks in mac

//good practice in js use backticks for strings in js because 
//it allows us to use template literals and also it is more 
//readable and easier to use than single or double quotes in js.


//string interpolation in js -
const myName = "suraj";
console.log(`my name is ${myName}`); //my name is suraj

//other way to declare string in js -
const myGme = new String("gta"); //string object in js


//functions of String object in js -
console.log(myGme[1]); //t because string is an array of characters in js
console.log(myGme.__proto__); //{} because is a string object in js 
//and it has its own prototype in js
console.log(myGme.length); //3
console.log(myGme.toUpperCase()); //GTA
console.log(myGme.charAt(2)); //a
console.log(myGme.indexOf('t')); //1

console.log(myGme.substring(0,2)); //gt
console.log(myGme.slice(-1,0)); //gt from back because of negative index in js

let myStrin = "   suraj  ";
console.log(myStrin.trim()); //suraj remove front and back spaces in js
//about trim() method in js -
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const url = "ww.suraj.com/home%20page";
console.log(url.replace("%20",' ')); //ww.suraj.com/home page replace %20 with space in js

console.log(url.split('.')); //['ww', 'suraj', 'com/home%20page'] split string into array of strings in js

//read all string methods in js -
//mdn web docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


//guide me to push this code to github teminal without creating repository on github website -
//1. Open terminal and navigate to the directory where your code is located.
//2. Initialize a new git repository by running the command: git init
//3. Add your files to the staging area by running the command: git add .
//4. Commit your changes by running the command: git commit -m "Initial commit"
//5. Create a new repository on GitHub by running the command: git remote add origin <repository_url>
//6. Push your code to GitHub by running the command: git push -u origin master
//
//
