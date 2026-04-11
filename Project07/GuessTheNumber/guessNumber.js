//for getting number 1 to 100 
let randomNumber = console.log(Math.random()*100 + 1);

//track every id , class and element in the html file
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const gueSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrH = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

//create a variable to track the number of guesses
const p = document.createElement('p');

//previous guess will be stored in an array and 
//we will use it to display the previous guesses to the user
//numGuess used to track the number of guesses and to display it to the user
let prevGuess = [];
let numGuess = 1;

//playGame is a boolean variable that will be used to control the game loop
let playGame = true;


//condition to check player is available to play the game or not
if(playGame) {
    submit.addEventListener( 'click' , function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        //console.log(guess);
        validGuess(guess);
    })
}
 
//create valid function to check number is valid or not
function validGuess(guess) {
   if(isNaN(guess)){
    alert('Please enter a valid number');
   }
   else if(guess < 1 || guess > 100){
    alert('Please enter a number between 1 and 100');
   }
   else {
    prevGuess.push(guess);
    if(numGuess === 11){
        displayGuess(guess);
        displayMessage(`game over ! The number was ${randomNumber}`);
        endGame();
    }
    else {
        displayGuess(guess);
        checkGuess(guess);
    }
   }
}


//function to check the user's guess no is equal to the random number or not and 
//display the appropriate message to the user
function checkGuess(guess) {
    if(guess === randomNumber){
        displayMessage(`Congratulations! You guessed number is right!`);
        endGame();
    }
    else if (guess < randomNumber){
        displayMessage(`your guess is too low!`);
    }
    else if(guess > randomNumber){
        displayMessage(`your guess is too high!`);
    }
}

//function to display the user's guess and the number of guesses to the user
function displayGuess(guess){
    userInput.value = '';
    gueSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `You have ${11 - numGuess} guesses left`;

}

//function to take message from message from user and print it to the user
//if checkguess is true then display message is "Congratulations! You guessed the number!"
function displayMessage(message) {
    lowOrH.innerHTML = `<h2> ${message} </h2>`;
}


//function to reset the game and start a new game
//
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click' , function (e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    gueSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  })
}

//function to end the game and display the final message to the user
function endGame() {
    userInput.value = '';
  userInput.setAttribute('disabled' , '');
  p.classList.add('button');
  p.innerHTML = `<button id="newGame">Start New Game</button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}