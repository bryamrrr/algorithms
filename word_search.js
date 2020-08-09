const rightSearch = (matrix, word, row, column) => {
  if (word === "") {
    return true;
  }

  let found = false;
  const wordLetters = word.split("");
  const len = matrix.length;
  const wordLen = word.length;
  for (let i = column; i < len; i++) {
    if (matrix[row][i] === wordLetters[0]) {
      found = rightSearch(
        matrix,
        word.slice(1, wordLen, row, i),
        row,
        column + 1
      );
    }
  }

  return found;
};

const bottomSearch = (matrix, word, row, column) => {
  if (word === "") {
    return true;
  }

  let found = false;
  const wordLetters = word.split("");
  const len = matrix.length;
  const wordLen = word.length;
  for (let i = row; i < len; i++) {
    if (matrix[row][column] === wordLetters[0]) {
      found = bottomSearch(
        matrix,
        word.slice(1, wordLen, i, column),
        row + 1,
        column
      );
    }
  }

  return found;
};

const wordSearch = (matrix, word) => {
  const wordLetters = word.split("");

  let right = false;
  let bottom = false;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === wordLetters[0]) {
        const len = word.length;
        right = rightSearch(matrix, word.slice(1, len), i, j + 1);
        bottom = bottomSearch(matrix, word.slice(1, len), i + 1, j);
      }
    }
  }
  return right || bottom;

  /*
    Time complexity = n^n (Exponencial)
    Space complexity = n^n (Exponencial) => Recursion can be replaced by a for loop and
                                            decrease this to constant space O(1)
  */
};

matrix = [
  ["F", "A", "C", "I"],
  ["O", "B", "Q", "P"],
  ["A", "N", "O", "B"],
  ["M", "A", "S", "S"],
];
console.log(wordSearch(matrix, "FAC"));
