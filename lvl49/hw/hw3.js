function printValidPairs(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            console.log(`(${i}, ${j})`);
        }
    }
}
