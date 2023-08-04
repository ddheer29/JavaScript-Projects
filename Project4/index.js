const randomNum = parseInt((Math.random() * 10) + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.startOver');

const p = document.createElement('p');
let prevGuess = [];
let numGuesses = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (!isNaN) {
        alert('Please enter a valid number');
    }
    else if (guess < 1) {
        alert('Please enter a number greater 0');
    }
    else if (guess > 100) {
        alert('Please enter a number less than or equal to 100');
    }
    else {
        prevGuess.push(guess);
        if (numGuesses > 10) {
            displayGuess();
            displayMessage(`Game Over. Random number was ${randomNum}`)
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        displayMessage(`Correct Guess`);
        endGame();
    }
    else if (guess < randomNum) {
        displayMessage(`Number is tooo low`);
    }
    else if (guess > randomNum) {
        displayMessage(`Number is tooo high`);
    }
}

function displayGuess(guess) {
    userInput.value = "";
    guessSlot.innerHTML += `${guess}, `
    numGuesses++;
    remaining.innerHTML = `${11 - numGuesses}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNum = parseInt((Math.random() * 10) + 1);
        prevGuess = [];
        numGuesses = 1;
        guessSlot.innerHTML = "";
        remaining.innerHTML = `${11 - numGuesses}`
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}

function endGame() {
    userInput.innerHTML = ""
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
