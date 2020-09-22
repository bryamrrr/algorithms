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

const getNumberOfPaths = (row, col, m, n) => {
  if (row === m - 1 || col === n - 1) {
    return 1;
  }

  const downPaths = getNumberOfPaths(row + 1, col, m, n);
  const rightPaths = getNumberOfPaths(row, col + 1, m, n);

  return downPaths + rightPaths;
};

const uniquePaths = function (m, n) {
  if (m === 1 && n === 1) {
    return 1;
  }
  const paths = getNumberOfPaths(1, 0, m, n) + getNumberOfPaths(0, 1, m, n);
  return paths;

  /*
    Time complexity: 2**(m*n) exponential
    Space complexity: Same
  */
};

console.log(uniquePaths(3, 2)); // 3
