function sumDiagonals(matrix) {
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    let n = matrix.length;

    for (let i = 0; i < n; i++) {
        primaryDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][n - 1 - i]; 
    }

    return [primaryDiagonalSum, secondaryDiagonalSum];
}
