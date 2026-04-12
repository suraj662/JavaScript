//generate random color 
const randomColor = function() {
    const hex = '0123456789abcdef';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

//generate 6 digit random color code
//console.log(randomColor());

//define globally
let intervalId
const startChangingcolor= function() {
   //to stop changing color,give reference to setInterval
    intervalId = setInterval(changColor , 1000);
    //or 
    // if (!intervalId) {
    //     intervalId = setInterval(changeBgColor, 1000);
    //   }
   function changColor() {
    document.body.style.backgroundColor = randomColor();
   }
}

const stopChangingcolor = function () {
     clearInterval(intervalId);
     intervalId = null;
}

document.querySelector('#start').addEventListener('click' , startChangingcolor );
document.querySelector('#stop').addEventListener('click' , stopChangingcolor );