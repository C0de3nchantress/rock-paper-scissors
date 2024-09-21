function getComputerChoice(){
    const num = Math.floor(Math.random() * 3);

    if (num == 0) {
        return "Rock";
    } else if (num == 1) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function getHumanChoice(num) {
    if (num == 0) {
        return "Rock";
    } else if (num == 1) {
        return "Paper"
    } else {
        return "Scissors"
    } 
}

let humanChoice = getHumanChoice(parseInt(prompt("Enter 0 for 'Rock', Enter 1 for 'Paper', Enter '2' for Scissors: ")))
console.log(humanChoice)

console.log(getComputerChoice());