function getComputerChoice(){
    const computerOptions = ["rock", "paper", "scissors"];

    const comChoiceNum = Math.floor(Math.random() * 3);
    return computerOptions[comChoiceNum]; 
}


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

// const computerSelection = getComputerChoice();
// const playerSelection = prompt("Rock, paper or scissors? Choose");


// console.log(playRound(playerSelection, computerSelection));