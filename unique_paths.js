// A robot is located at the top-left corner of a m x n grid
// (marked 'Start' in the diagram below).
// The robot can only move either down or right at any point in time.
// The robot is trying to reach the bottom-right corner of the grid
// (marked 'Finish' in the diagram below).
// How many possible unique paths are there?

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

const getPaths = (row, col) => {
  if (row === 0 || col === 0) {
    return 1;
  }

  return getPaths(row - 1, col) + getPaths(row, col - 1);
};

const uniquePaths = function (m, n) {
  return getPaths(m - 1, n - 1);

  /*
    Time complexity: O(2**(n)) exponential
    Space complexity: Same
  */
};

const generateMatrix = (m, n) => {
  let result = new Array(m).fill();

  result.forEach((_, index) => {
    if (index === 0) {
      result[index] = new Array(n).fill(1);
    } else {
      result[index] = new Array(n).fill();
      result[index][0] = 1;
    }
  });

  return result;
};

const uniquePaths2 = function (m, n) {
  const matrix = generateMatrix(m, n);
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      if (typeof matrix[row][col] === "undefined") {
        matrix[row][col] = matrix[row - 1][col] + matrix[row][col - 1];
      }
    }
  }

  return matrix[m - 1][n - 1];
  /*
    Time complexity: O(n)
    Space complexity: O(n)
  */
};

console.log(uniquePaths2(3, 2)); // 3
console.log(uniquePaths2(3, 4)); // 10
