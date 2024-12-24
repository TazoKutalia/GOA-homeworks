function rockPaperScissors(player1, player2) {
    if (player1 === player2) {
        return "გაიყო";
    }

    if (
        (player1 === "rock" && player2 === "scissors") ||
        (player1 === "scissors" && player2 === "paper") ||
        (player1 === "paper" && player2 === "rock")
    ) {
        return "მომწოდებელი 1 მოიგო";
    } else {
        return "მომწოდებელი 2 მოიგო";
    }
}

console.log(rockPaperScissors("rock", "scissors"));
console.log(rockPaperScissors("paper", "rock"));
console.log(rockPaperScissors("scissors", "scissors"));
