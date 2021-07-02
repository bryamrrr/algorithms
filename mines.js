/*
Example:
minesweeper(["XOO", "OOO", "XXO"]) // should print

X 1 0
3 3 1
X X 1


*/


const minesweeper = (matrix) => {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const newMatrix = [];
    for (let i = 0; i < rows; i++) {
        let newRow = [];
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 'X') {
                newRow.push('X');
            } else {
                newRow.push([
                    matrix[i - 1] && matrix[i - 1][j - 1],
                    matrix[i - 1] && matrix[i - 1][j],
                    matrix[i - 1] && matrix[i - 1][j + 1],
                    matrix[i] && matrix[i][j - 1],
                    matrix[i] && matrix[i][j + 1],
                    matrix[i + 1] && matrix[i + 1][j - 1],
                    matrix[i + 1] && matrix[i + 1][j],
                    matrix[i + 1] && matrix[i + 1][j + 1],
                ].filter(item => item === 'X').length);
            }
        }
        newMatrix.push(newRow);
    }

    newMatrix.forEach(row => console.log(row.join(' ')));
}

// minesweeper(["XOO", "OOO", "XXO"]);
// minesweeper(["XOOXXXOO", "OOOOXOXX", "XXOXXOOO", "OXOOOXXX", "OOXXXXOX", "XOXXXOXO", "OOOXOXOX", "XOXXOXOX"]);

test2 = ["OOOXXXOXX", "XXXXXXOXX", "XOOXXXXXX", "OOXXOXOXX", "XXXXXXXXX"]
minesweeper(test2); // should print