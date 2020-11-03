/*
Game Function:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

//Ul Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//assign Ui min and max
minNum.textContent = min;
maxNum.textContent = max;

//play again event listner
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
})

//listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  //validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  } else{
    setMessage(' ');
  }

  //check if won
  if(guess === winningNum){

    //Game over - won
    gameOver(true, `${winningNum} is correct, You win!`);

  }else{

    //wrong number
    guessesLeft -= 1;
    if(guessesLeft === 0){

      //Game over - lost
      gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);

    } else {

      //game continues - answer wrong

      //clear input
      guessInput.value = '';
      //change color
      guessInput.style.borderColor = 'red';
      //Tell user its the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');

    }
  }
});

//game over
function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';

  //disable input
  guessInput.disabled = true;
  //change color
  guessInput.style.borderColor = color;
  //set text color
  message.style.color = color;
  //set message
  setMessage(msg);

  //Play again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

//Get winning Number
function getRandomNum(min, max){
  
  return Math.floor(Math.random()*(max-min+1)+min);
}

//set message
function setMessage(msg, color){
  message.textContent = msg;
  message.style.color = color;
}