//function to get Computer Choice
function getComputerChoice(){
    const computerOptions = ["rock", "paper", "scissors"];

    const comChoiceNum = Math.floor(Math.random() * 3);
    return computerOptions[comChoiceNum]; 
}

//function to get round winner
function playRound(playerChoice, comChoice) {
    playerChoice = playerChoice.toLowerCase();

    if(playerChoice === comChoice){
        return "tie";
    } else if (playerChoice === "rock") {
        if(comChoice === "paper"){
            return "lose";
        } else if (comChoice === "scissors"){
            return "win";
        }
    } else if (playerChoice === "paper") {
        if(comChoice === "scissors"){
            return "lose";
        } else if (comChoice === "rock"){
            return "win";
        }
    } else if (playerChoice === "scissors"){
        if(comChoice === "rock"){
            return "lose"
        } else if (comChoice === "paper"){
            return "win";
        }
    } 

    return "Not a valid choice";
}

//helper function to game function check the winner of round 
function gameStatusWon(playerScore, ComputerScore){
    return playerScore >= 5 || ComputerScore >= 5;
}

function roundStatus(playerSelection){
    let computerSelection = getComputerChoice();
    let status = playRound(playerSelection, computerSelection);

    let roundStatus = document.querySelector('#round-status');
    if(status === "tie"){
        roundStatus.innerHTML = `It's a tie! you both chose ${computerSelection}`;
    } else if (status === "win"){
        roundStatus.innerHTML = `You WON the round! ${playerSelection} beats ${computerSelection}`;
    } else {
        roundStatus.innerHTML = `You LOST the round! ${computerSelection} beats ${playerSelection}`;
    }

    return status;
}

function updateScore(playerScore, computerScore){
    document.querySelector('#player-score').textContent = playerScore;
    document.querySelector('#comp-score').textContent = computerScore;
}

function displayGameWinner(playerScore, computerScore){
    let roundStatus = document.querySelector('#round-status');
    if (computerScore > playerScore) {
        roundStatus.textContent = 'COMPUTER WINS!';
    } else {
        roundStatus.textContent = 'PLAYER WINS';
    }
    
}

let gameEnded = gameStatusWon();

function endOfGame(){
    const restart = document.createElement('button');
    restart.setAttribute('id','restart');
    restart.setAttribute('style','font-size: 2rem; padding:1rem; background-color:#000; color:#fff; border-radius: 5%; margin: 2rem;');
    restart.innerHTML = 'RESTART GAME';

    let roundResults = document.querySelector('#round-results');
    roundResults.appendChild(restart);

    restart.addEventListener('click', () => {
            updateScore(0,0);
            gameEnded = false;
            roundResults.innerHTML ='';
            const roundStatus = document.createElement('p');
            roundStatus.setAttribute('id','round-status');
            roundResults.appendChild(roundStatus);
        });
}

//function to start the game
function game() {
    let computerScore = 0;
    let playerScore = 0;
    let playerSelectionButtons = document.querySelectorAll('.selection-button');

    playerSelectionButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if(gameEnded){
                return;
            }

            let playerSelection = button.value;
            let status = roundStatus(playerSelection);

            if (status === "win") {
                playerScore++;
            } else if (status === "lose") {
                computerScore++;
            }

            updateScore(playerScore, computerScore);
            
            if (gameStatusWon(playerScore, computerScore)) {
                displayGameWinner(playerScore, computerScore);
                endOfGame();
                computerScore = 0;
                playerScore = 0;
                gameEnded = true;
            }
        });
    });
}


game();