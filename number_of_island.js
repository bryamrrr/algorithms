/**
 * @param {character[][]} grid
 * @return {number}
 */
const getLandVectors = (grid) => {
  let vectors = [];
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        vectors.push(`${row}${col}`);
      }
    }
  }

  return vectors;
};

const clearThisIsland = (vectors, col, row, maxRow, maxCol) => {
  if ((col >= 0 && col === maxCol) || (row >= 0 && row === maxRow)) {
    return;
  }

  const index = vectors.indexOf(`${row}${col}`);
  if (index === -1) {
    return;
  }

  vectors[index] = undefined;

  clearThisIsland(vectors, col, row + 1, maxRow, maxCol); // rows
  clearThisIsland(vectors, col, row - 1, maxRow, maxCol); // rows
  clearThisIsland(vectors, col + 1, row, maxRow, maxCol); // cols
  clearThisIsland(vectors, col - 1, row, maxRow, maxCol); // cols
};

const numIslands = function (grid) {
  let landVectors = getLandVectors(grid);
  let islands = 0;
  let counter = 0;

  while (counter < landVectors.length) {
    if (typeof landVectors[counter] !== "undefined") {
      let [row, col] = landVectors[counter];
      clearThisIsland(
        landVectors,
        Number(col),
        Number(row),
        grid.length,
        grid[0].length
      );
      console.log("landVectors", [...landVectors]);
      islands++;
      // landVectors[counter] = undefined;
    }
    counter++;
  }

  return islands;
};

const gri5 = [
  [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "0",
    "0",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "0",
    "0",
    "0",
    "0",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
  ],
]; // 3

// const grid4 = [
//   ["1", "1", "1"],
//   ["0", "1", "0"],
//   ["1", "1", "1"],
// ];
// console.log(numIslands(grid4)); // 1

// const grid0 = [["1", "0", "1", "1", "0", "1", "1"]];
// console.log(numIslands(grid0)); // 3

// const grid = [
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "0", "1", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "0", "0", "0"],
// ];
// console.log(numIslands(grid)); // 1

// const grid2 = [
//   ["1", "1", "0", "0", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "1", "0", "0"],
//   ["0", "0", "0", "1", "1"],
// ];
// console.log(numIslands(grid2)); // 3
