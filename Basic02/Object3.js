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
//or , you can also change the key name of object
const {courseName : name} = course;
console.log(name);
