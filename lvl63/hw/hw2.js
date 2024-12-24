function battle(player1, player2) {
    const player1Score = player1[0] + player1[1] * 2 + (player1[2] * (player1[0] + player1[1])) / 10;
    const player2Score = player2[0] + player2[1] * 2 + (player2[2] * (player2[0] + player2[1])) / 10;

    if (player1Score > player2Score) {
        return "მომწოდებელი 1 მოიგო";
    } else if (player1Score < player2Score) {
        return "მომწოდებელი 2 მოიგო";
    } else {
        return "გაიყო";
    }
}

console.log(battle([5, 8, 7], [6, 7, 6]));  // Example battle
console.log(battle([3, 3, 3], [3, 3, 3]));  // Example tie
