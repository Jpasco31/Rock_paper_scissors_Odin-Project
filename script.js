function getComputerChoice(){
    const computerOptions = ["rock", "paper", "scissors"];

    const comChoiceNum = Math.floor(Math.random() * 3);
    return computerOptions[comChoiceNum]; 
}


function playRound(playerChoice, comChoice) {
    playerChoice = playerChoice.toLowerCase();

    if(playerChoice === comChoice){
        return "Its a tie you both chose " + comChoice;
    } else if (playerChoice === "rock") {
        if(comChoice === "paper"){
            return "You Lose! " + comChoice + " beats " + playerChoice;
        } else if (comChoice === "scissors"){
            return "You Win! " + playerChoice + " beats " + comChoice;
        }
    } else if (playerChoice === "paper") {
        if(comChoice === "scissors"){
            return "You Lose! " + comChoice + " beats " + playerChoice;
        } else if (comChoice === "rock"){
            return "You Win! " + playerChoice + " beats " + comChoice;
        }
    } else if (playerChoice === "scissors"){
        if(comChoice === "rock"){
            return "You Lose! " + comChoice + " beats " + playerChoice;
        } else if (comChoice === "paper"){
            return "You Win! " + playerChoice + " beats " + comChoice;
        }
    } 

    return "Not a valid choice";
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("Rock, paper or scissors? Choose");


console.log(playRound(playerSelection, computerSelection));