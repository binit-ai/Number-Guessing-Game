'use strict';

// Generating the random nunber to be guessed
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// Setting the counter variable score to 20
let score = 20;
let highscore = 0;

// Defining a function to display message on the screen
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

// Defining a function to change the background of the tab and width of the number
function bg_width(bgColor, width) {
  document.querySelector('body').style.backgroundColor = bgColor;
  document.querySelector('.number').style.width = width;
}

// Checking the clicking of the check button
document.querySelector('.check').addEventListener('click', function () {
  // Getting the value of the input field
  const guess = Number(document.querySelector('.guess').value);
  // Checking if the input filed is empty
  if (!guess) {
    displayMessage('⛔ No Number');
  }

  /// When the guess of the user is correct
  else if (guess === secretNumber) {
    displayMessage(' 🎉 Correct Guess');
    bg_width('#60b347', '35rem');
    document.querySelector('.number').textContent = secretNumber;
    highscore = Math.max(score, highscore);
    document.querySelector('.highscore').textContent = highscore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('👎 You Lost the Game');
      document.querySelector('.score').textContent = 0;
      bg_width('#FF0000');
    }
  }
});

/// Checking if the user hits the Again! button

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  bg_width('#222', '15rem');
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
});
