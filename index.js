function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);

    if (num == 0) {
        return "rock";
    } else if (num == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Enter your choice (Rock, Paper or Scissors): ")
        .trim()
        .toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const roundResult = document.querySelector(".round-result");
    const humanPick = document.querySelector(".human-pick");
    const computerPick = document.querySelector(".computer-pick")
    humanPick.textContent = `You picked: ${humanChoice}`;
    computerPick.textContent = `Computer picked: ${computerChoice}`
    if (humanChoice === computerChoice) {
        roundResult.textContent = "It's a tie!";
        return false;
    }
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        roundResult.textContent = `You win! ${
            humanChoice.charAt(0).toUpperCase() +
            humanChoice.slice(1).toLowerCase()
        } beats ${computerChoice}.`;
        humanScore++;
        return true;
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "paper") ||
        (computerChoice === "paper" && humanChoice === "rock")
    ) {
        roundResult.textContent = `You lose! ${
            computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        } beats ${humanChoice}.`;
        computerScore++;
        return true;
    } 
}
let humanChoice;
function scissorsUser() {
    humanChoice = "scissors";
    const computerChoice = getComputerChoice();
    const round = playRound(humanChoice, computerChoice);
    return round;
}

function paperUser() {
    humanChoice = "paper";
    const computerChoice = getComputerChoice();
    const round = playRound(humanChoice, computerChoice);
    return round;
}

function rockUser() {
    humanChoice = "rock";
    const computerChoice = getComputerChoice();
    const round = playRound(humanChoice, computerChoice);
    return round;
}

let roundsPlayed = 0;

function playGame() {
    const maxRounds = 5;

    const scissors = document.querySelector(".scissors");
    scissors.addEventListener("click", () => {
        if (roundsPlayed < maxRounds) {
            const roundResult = scissorsUser();
            if (roundResult) {
                roundsPlayed++;
            }
            checkGameOver();
        }
    });

    const rock = document.querySelector(".rock");
    rock.addEventListener("click", () => {
        if (roundsPlayed < maxRounds) {
            const roundResult = rockUser();
            if (roundResult) {
                roundsPlayed++;
            }
            checkGameOver();
        }
    });

    const paper = document.querySelector(".paper");
    paper.addEventListener("click", () => {
        if (roundsPlayed < maxRounds) {
            const roundResult = paperUser();
            if (roundResult) {
                roundsPlayed++;
            }
        }
        checkGameOver();
    });
}

function checkGameOver() {
    const maxRounds = 5;
    if (roundsPlayed >= maxRounds) {
        if (humanScore > computerScore) {
            console.log(
                `You finished the game with ${humanScore} points and won the game by ${
                    humanScore - computerScore
                } point(s)!`
            );
        } else {
            console.log(
                `You finished the game with ${humanScore} points and lost the game by ${
                    computerScore - humanScore
                } point(s)!`
            );
        }
    }
}

playGame();
