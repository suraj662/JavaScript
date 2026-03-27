//de-structuring - means de-structure the object , get value and key
const course = {
    courseName : "js",
    price : "900",
    courseInstructor : "suraj"
};
//simple way to get property of object -
console.log(course.courseName);  //js

//or 

const {courseName} = course;
console.log(courseName);  //js
//or , you can also change the key name of object using de-structuring
const {courseName : name} = course;
console.log(name);  

//de-structuring mostly used in react.js



//api - it is mediator ,which do tasks given by user/client 
//suppose user click on log in google button , then api take 
//responsibility and do that task in backend and give result 
//and in json api call executed 
