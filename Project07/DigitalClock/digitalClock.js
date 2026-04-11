const clock = document.getElementById('clock');
//or 
//const clock = document.querySelector('#clock');

// let date = new Date();
// console.log(date.toLocaleTimeString());

//now,we use setInterval to update and control the clock every second
setInterval(function() {
    let date = new Date();
    //console.log(date.toLocaleTimeString());
    //but , we want to display the time in the clock div,
    // so we need to update the innerHTML of the clock div
    clock.innerHTML = date.toLocaleTimeString();
} , 1000);
