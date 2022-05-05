let playerScore = 0;
let computerScore = 0;
let playerSelection;

let figures = document.querySelectorAll(".button");

for (i = 0; i < figures.length; i++) {
    figures[i].addEventListener('click', function () {
        playerSelection = this.classList[0];
        buttonAnimation(this.classList[0]);
        game();
    });
}

function buttonAnimation(button) {
    document.querySelector("." + button).classList.add('pressed');
    setTimeout(() => {
        document.querySelector("." + button).classList.remove('pressed');
    }, 100);
}

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {

        switch (computerSelection) {
            case "Rock":
                return 'Draw! Rock vs Rock';
                break;
            case "Paper":
                computerScore++;
                return 'You loose! Paper beats Rock';
                break;
            case "Scissors":
                playerScore++;
                return 'You win! Rock beats Scissors';
        }

    } else if (playerSelection == 'paper') {

        switch (computerSelection) {
            case "Rock":
                playerScore++;
                return 'You win! Paper beats Rock';
                break;
            case "Paper":
                return 'Draw! Paper vs Paper';
                break;
            case "Scissors":
                computerScore++;
                return 'You loose! Scissors beats Paper';
        }

    } else if (playerSelection == 'scissors') {

        switch (computerSelection) {
            case "Rock":
                computerScore++;
                return 'You loose! Rock beats Scissors';
                break;
            case "Paper":
                playerScore++;
                return 'You win! Scissors beats Paper';
                break;
            case "Scissors":
                return 'Draw! Scissors vs Scissors';
        }

    }
}

function game() {
    let gameLog = document.querySelectorAll(".game-log");

    for (let i = 0; i < 5; i++) {
        gameLog[i].textContent = 'Round ' + (i + 1) + '\r\n';
        gameLog[i].textContent += playRound(playerSelection, computerPlay()) + '\r\n';
        gameLog[i].textContent += playerScore + ' vs ' + computerScore;
    }

    finalResult();
}

function finalResult() {
    let result = document.querySelector('.result');

    if (playerScore < computerScore) {
        result.textContent = 'After 5 rounds you LOOSE ' + playerScore + ' vs ' + computerScore + ' LOOSER! BOOOOOO!';
    } else if (playerScore > computerScore) {
        result.textContent = 'After 5 rounds you WIN ' + playerScore + ' vs ' + computerScore + ' WINNER WINNER CHICKEN DINNER!';
    } else {
        result.textContent = 'After 5 rounds it\'s DRAW ' + playerScore + ' vs ' + computerScore + ' TRY AGAIN!';
    }

    playerScore = 0;
    computerScore = 0;
}