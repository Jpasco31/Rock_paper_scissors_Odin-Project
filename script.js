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

function roundStatus(){
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Rock, paper or scissors? Choose");
    let status = playRound(playerSelection, computerSelection);

    if(status === "tie"){
        console.log("It's a tie. You both chose " + playerSelection);
    } else if (status === "win"){
        console.log("You won the round! " + playerSelection + " beats " + computerSelection);
    } else {
        console.log("You lost the round! " + computerSelection + " beats " + playerSelection );
    }

    return status;
}


function game(){
    let computerScore = 0;
    let playerScore = 0;
    let status;

    for(let i = 0; i < 5 && computerScore < 3 && playerScore < 3; i++){
        status = roundStatus();

       if(status === "win"){
            playerScore++;
        } else if (status === "lose"){
            computerScore++;
        } else if (status === "tie"){
            i--;
        }

        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);
    }

    
    if(computerScore > playerScore){
        console.log("YOU LOSE!");
    } else {
        console.log("YOU WIN!");
    }
}

game();