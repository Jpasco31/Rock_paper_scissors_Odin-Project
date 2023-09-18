const roundStatusDiv = document.querySelector('#round-status');

let score = JSON.parse(localStorage.getItem('score')) || { player: 0, computer: 0 };

//function to get Computer Choice
function getComputerChoice(){
    const computerOptions = ["rock", "paper", "scissors"];

    const comChoiceNum = Math.floor(Math.random() * 3);
    return computerOptions[comChoiceNum]; 
}

//function to get round winner
function playRound(playerChoice, comChoice) {
    const choice = {
        player : playerChoice.toLowerCase(),
        computer : comChoice.toLowerCase()
    }

    if(choice.player === choice.computer){
        return "tie";
    } else if (choice.player === "rock") {
        if(choice.computer === "paper"){
            return "lose";
        } else if (choice.computer === "scissors"){
            return "win";
        }
    } else if (choice.player=== "paper") {
        if(choice.computer === "scissors"){
            return "lose";
        } else if (choice.computer === "rock"){
            return "win";
        }
    } else if (choice.player === "scissors"){
        if(choice.computer === "rock"){
            return "lose"
        } else if (choice.computer === "paper"){
            return "win";
        }
    } 

    return "Not a valid choice";
}

function roundStatus(playerSelection){
    let computerSelection = getComputerChoice();
    let status = playRound(playerSelection, computerSelection);

    if(status === "tie"){
        roundStatusDiv.textContent = `It's a tie! you both chose ${computerSelection}`;
    } else if (status === "win"){
        roundStatusDiv.textContent = `You WON the round! ${playerSelection} beats ${computerSelection}`;
    } else {
        roundStatusDiv.textContent = `You LOST the round! ${computerSelection} beats ${playerSelection}`;
    }

    return status;
}

function updateScore(status){
    if (status === "win") {
        score.player++;
    } else if (status === "lose") {
        score.computer++;
    }
}

function showScore(){
    document.querySelector('#player-score').textContent = score.player;
    document.querySelector('#comp-score').textContent = score.computer;
}

function displayGameWinner(playerScore, computerScore){
    if (computerScore > playerScore) {
        roundStatusDiv.textContent = 'COMPUTER WINS!';
    } else {
        roundStatusDiv.textContent = 'PLAYER WINS';
    }
}

let gameEnded = gameStatusWon();

//helper function to game function check the winner of round 
function gameStatusWon(){
    return score.player >= 5 || score.computer >= 5;
}

function endOfGame(){
    const restart = document.createElement('button');
    restart.setAttribute('id','restart');
    restart.setAttribute('style','font-size: 2rem; padding:1rem; background-color:#000; color:#fff; border-radius: 5%; margin: 2rem;');
    restart.textContent = 'RESTART GAME';

    const roundResults = document.querySelector('#round-results');
    roundResults.appendChild(restart);

    restart.addEventListener('click', () => {
            score.player = 0;
            score.computer = 0;
            localStorage.setItem('score', JSON.stringify(score));
            gameEnded = false;
            showScore();
            roundStatusDiv.textContent ='';
            roundResults.removeChild(restart);
        });
}

function gameStatus(){
    if (gameStatusWon() === false ) return;

    displayGameWinner(score.player, score.computer);
    gameEnded = true;
    endOfGame();
}

function clickEffect(){
    
}

//function to start the game
function play() {
    gameStatus();
    showScore();

    const playerSelectionButtons = document.querySelectorAll('.selection-button');

    playerSelectionButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if(gameEnded){
                return;
            }

            let playerSelection = button.value;
            let status = roundStatus(playerSelection);
            updateScore(status);
            showScore();
            localStorage.setItem('score', JSON.stringify(score));

            document.getElementById(`${playerSelection}-img`).src = `images/${playerSelection}White.png`;

            setTimeout(() => {
                document.getElementById(`${playerSelection}-img`).src = `images/${playerSelection}Black.png`;
            }, 500); 
            
            gameStatus();
        });
    });
}

window.onload = () => {
    play();
}