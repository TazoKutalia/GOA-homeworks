function printCombinations(row, col) {
    for (let r = 1; r <= row; r++) {
        for (let c = 1; c <= col; c++) {
            console.log(`row: ${r} col: ${c}`);
        }
    }
}
