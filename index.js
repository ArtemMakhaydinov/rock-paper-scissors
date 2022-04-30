let playerScore = 0;
let computerScore = 0;
let playerSelection = prompt('Choose your destiny! Type \"Rock\", \"Paper\" or \"Scissors\"!')

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
    let playerSelectionNormalised = playerSelection.toLowerCase();
    if (playerSelectionNormalised == 'rock') {

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

    } else if (playerSelectionNormalised == 'paper') {

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

    } else if (playerSelectionNormalised == 'scissors') {

        switch (computerSelection) {
            case "Rock":
                computerScore++;
                return 'You loose! Rock beats scissors';
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

function game(){
    for(let i = 0; i < 5; i++){
        console.log(playRound(playerSelection, computerPlay()));
        console.log(playerScore + ' vs ' + computerScore);
    }
}