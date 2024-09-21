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
    if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats scissors.");
        humanScore++;
        return true;
    } else if (computerChoice == "rock" && computerChoice == "scissors") {
        console.log("You lose! Rock beats scissors.");
        computerScore++;
        return true;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats paper.");
        humanScore++;
        return true;
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
        console.log("You lose! Scissors beats paper.");
        computerScore++;
        return true;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock.");
        humanScore++;
        return true;
    } else if (computerChoice == "paper" && humanChoice == "rock") {
        console.log("You lose! Paper beats rock.");
        computerScore++;
        return true;
    } else {
        console.log("It's a tie!");
        return false;
    } 
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
