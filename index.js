let playerScore = 0;
let computerScore = 0;
let playerSelection = inputChecker();
game();

function inputChecker(){
    let input = prompt('Choose your destiny! Type \"Rock\", \"Paper\" or \"Scissors\"!');
    if (input.toLowerCase() == 'rock' || input.toLowerCase() == 'paper' || input.toLowerCase() == 'scissors'){
        console.log('Your choice is ' + input);
        return input;
    } else {
        alert('Incorrect input. Enter \"Rock\", \"Paper\" or \"Scissors\" please!')
        return inputChecker();
    }
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
    let playerSelectionNormalized = playerSelection.toLowerCase();
    if (playerSelectionNormalized == 'rock') {

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

    } else if (playerSelectionNormalized == 'paper') {

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

    } else if (playerSelectionNormalized == 'scissors') {

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

function game(){
    for(i = 1; i <= 5; i++){
        console.log('Round ' + i);
        console.log(playRound(playerSelection, computerPlay()));
        console.log(playerScore + ' vs ' + computerScore);
    }
    finalResult();
}

function finalResult(){
    if (playerScore < computerScore){
        console.log('After ' + (i - 1) + ' rounds you LOOSE ' + playerScore + ' vs ' + computerScore + ' LOOSER! BOOOOOO!');
    } else if (playerScore > computerScore){
        console.log('After ' + (i - 1) + ' rounds you WIN ' + playerScore + ' vs ' + computerScore + ' WINNER WINNER CHICKEN DINNER!');
    } else {
        console.log('After ' + (i - 1)  + ' rounds it\'s DRAW ' + playerScore + ' vs ' + computerScore + ' TRY AGAIN!');
    }
}