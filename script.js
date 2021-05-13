let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = Number(document.querySelector('.highscore').textContent);

/**
 * Function to select .'message' and put some message into
 */
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

/**
 * Function to select .'score' and put some message into
 */
const displayScore = function(message){
    document.querySelector('.score').textContent = message;
}

/**
 * Region properties
 */

// document.querySelector('.number').textContent = secretNumber; // this show the secret number

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('No number!');
    } else if (guess === secretNumber) {
        displayMessage('Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        console.log (score, highscore);

        if ( score > highscore ){
            document.querySelector('.highscore').textContent = score;
            highscore = score;
        }
    }
    else if (guess!==secretNumber){
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low!')
            score--;
            displayScore(score);
        } else {
            displayMessage('You lost the game');
            displayScore(0);
        }
    }

    // else if (guess > secretNumber) {
    //     // When guess is too low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game';
    //         displayScore(); = 0;
    //     }
//     // }
//
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.number').textContent = '?';
    displayScore(20);
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
});

/**
 * end Region
 */
