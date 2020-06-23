function computerPlay() {
    let moves = ["rock", "paper", "scissors"];
    return moves[Math.floor(Math.random() * moves.length)];
}

function humanPlay() {
    let move = prompt("Enter your move (Rock, Paper, or Scissors): ");
    return move.toLowerCase();
}
// function playRound(playerSelection, computerSelection){}

let computerSelection = computerPlay();
let humanSelection = humanPlay();
console.log(computerSelection);
console.log(humanSelection);

