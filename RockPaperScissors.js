function computerPlay() {
    let moves = ["Rock", "Paper", "Scissors"];
    return moves[Math.floor(Math.random() * moves.length)];
}

function playRound()