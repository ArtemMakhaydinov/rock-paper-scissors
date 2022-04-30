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

function singleRound(playerSelection, computerSelection) {
    let playerSelectionNormalised = playerSelection.toLowerCase();
    if (playerSelectionNormalised == 'rock') {
        switch (computerSelection) {
            case "Rock":
                return 'Draw! Rock vs Rock';
                console.log('Draw! Rock vs Rock');
                break;
            case "Paper":
                return 'You loose! Paper beats Rock';
                console.log('You loose! Paper beats Rock');
                break;
            case "Scissors":
                return 'You win! Rock beats Scissors';
                console.log('You win! Rock beats Scissors');
        }
    } else if (playerSelectionNormalised == 'paper') {
        switch (computerSelection) {
            case "Rock":
                return 'You win! Paper beats Rock';
                console.log('You win! Paper beats Rock');
                break;
            case "Paper":
                return 'Draw! Paper vs Paper';
                console.log('Draw! Paper vs Paper');
                break;
            case "Scissors":
                return 'You loose! Scissors beats Paper';
                console.log('You loose! Scissors beats Paper');
        }
    } else if (playerSelectionNormalised == 'scissors') {
        switch (computerSelection) {
            case "Rock":
                return 'You loose! Rock beats scissors';
                console.log('You loose! Rock beats scissors');
                break;
            case "Paper":
                return 'You win! Scissors beats Paper';
                console.log('You win! Scissors beats Paper');
                break;
            case "Scissors":
                return 'Draw! Scissors vs Scissors';
                console.log('Draw! Scissors vs Scissors');
        }
    }
}