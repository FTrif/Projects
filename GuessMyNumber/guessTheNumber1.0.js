'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displaySecretNumber = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
};
const displayBody = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const displayGuess = function (guess) {
  document.querySelector('.guess').value = guess;
};
const displayNumberStyle = function (nstyle) {
  document.querySelector('.number').style.width = nstyle;
};
const displayHighSCore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there no input
  if (!guess) {
    displayMessage('No Number!');
    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct!');
    score++;
    displayScore(score);
    displaySecretNumber(secretNumber);
    displayBody('#60b347');
    displayNumberStyle('30rem');

    if (score > highscore) {
      highscore = score;
      displayHighSCore(highscore);
    }
    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displaySecretNumber(Math.trunc(Math.random() * 20) + 1);
  displayMessage('Start guessing...');
  displayScore(score);
  displaySecretNumber('?');
  displayGuess('');
  displayBody('#222');
  displayNumberStyle('15rem');
});
