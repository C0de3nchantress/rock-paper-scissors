function getComputerChoice(){
    const num = Math.floor(Math.random() * 3);

    if (num == 0) {
        return "rock";
    } else if (num == 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    return prompt("Enter your choice (Rock, Paper or Scissors): ").trim().toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log(`You picked ${humanChoice}, Computer picked ${computerChoice}`);
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return false;
    }

    if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")) {
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase()} beats ${computerChoice}.`);
        humanScore++;
        return true;
    }
    
    console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
    computerScore++;
    return true;
}



function playGame() {
    let i = 0
    while (i < 5) {
        let computerChoice = getComputerChoice(); 
        let humanChoice = getHumanChoice();
        let round = playRound(humanChoice, computerChoice)
        
        if (round) {
            i++;
        }

        if (computerScore > humanScore) {
            console.log(`Your score is ${humanScore}. The computer's score is ${computerScore}. The computer is in the lead by ${computerScore - humanScore} point(s)!`)
        } else if (humanScore > computerScore) {
            console.log(`Your score is ${humanScore}. The computer's score is ${computerScore}.You're in the lead by ${humanScore - computerScore} point(s)!`)
        } else {
            console.log(`Your score is ${humanScore}. The computer's score is ${computerScore}. The scores are equal!`)
        }
    }
    if (humanScore > computerScore) {
        console.log(`You finished the game with ${humanScore} points and won the game by ${humanScore - computerScore} point(s)!`)
    } else {
        console.log(`You finished the game with ${humanScore} points and lost the game by ${computerScore - humanScore} point(s)!`)
    }
}

playGame();
