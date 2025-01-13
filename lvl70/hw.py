def func(n, m):
    matrix = [[0] * m for _ in range(n)]
    num = 1
    for i in range(n):
        for j in range(m):
            matrix[i][j] = num
            num += 1
    return matrix