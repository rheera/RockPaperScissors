function computerPlay() {
    let moves = ["rock", "paper", "scissors"];
    return moves[Math.floor(Math.random() * moves.length)];
}

function humanPlay() {
    let move = prompt("Enter your move (Rock, Paper, or Scissors): ");
    return move.toLowerCase();
}
function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return "You lose! Paper beats rock";
        }
        else if (computerSelection == "scissors") {
            return "You win! Rock beats scissors";
        }
        else {
            return "Draw!";
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            return "You lose! Scissors beats paper";
        }
        else if (computerSelection == "rock") {
            return "You win! Paper beats rock";
        }
        else {
            return "Draw!";
        }
    }
    else {
        if (computerSelection == "rock") {
            return "You lose! Rock beats scissors";
        }
        else if (computerSelection == "paper") {
            return "You win! Scissors beats paper";
        }
        else {
            return "Draw!";
        }
    }
}

function game() {
    let humanTally = 0;
    let compTally = 0;
    for (let i = 0; i < 5; i++){
        let computerSelection = computerPlay();
        let humanSelection = humanPlay();
        console.log("Computer chose: " + computerSelection);
        console.log("Human chose: " + humanSelection);
        let round = playRound(humanSelection, computerSelection);
        console.log(round);
        if (/win/.test(round)) {
            humanTally++;
        }
        else if (/lose/.test(round)){
            compTally++;
        }
    }
    console.log("Human score: " + humanTally);
    console.log("Computer Score: " + compTally);
    if (humanTally == compTally){
        return "Tie game";
    }
    else if (humanTally > compTally){
        return "You won";
    }
    else {
        return "You lost";
    }
}

let computerSelection = computerPlay();
let humanSelection = humanPlay();
console.log("Computer chose: " + computerSelection);
console.log("Human chose: " + humanSelection);
console.log(playRound(humanSelection, computerSelection));
console.log(game());
