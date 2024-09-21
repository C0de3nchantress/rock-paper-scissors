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
    } else if (computerChoice == "rock" && computerChoice == "scissors") {
        console.log("You lose! Rock beats scissors.");
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissors beats paper.");
        humanScore++;
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
        console.log("You lose! Scissors beats paper.");
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock.");
        humanScore++;
    } else if (computerChoice == "paper" && humanChoice == "rock") {
        console.log("You lose! Paper beats rock.");
        computerScore++;
    } else {
        console.log("It's a tie!");
    } 
}

const computerChoice = getComputerChoice(); 
const humanChoice = getHumanChoice();

playRound(humanChoice, computerChoice);