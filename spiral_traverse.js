/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

/**
 * The tricky part in this problem is to use clean code with a smart use of data structures
 */

class MatrixLector {
  constructor(matrix) {
    this.matrix = matrix;
    this.currentDirection = "right";
    this.rowPointer = 0;
    this.columnPointer = -1;
  }

  getCurrentValue = () => {
    const currentValue =
      this.matrix[this.rowPointer] &&
      this.matrix[this.rowPointer][this.columnPointer];
    return currentValue;
  };

  cleanCurrentValue = () => {
    if (this.matrix[this.rowPointer]) {
      this.matrix[this.rowPointer][this.columnPointer] = undefined;
    }
  };

  moveToNextValue = () => {
    if (this.currentDirection === "right") {
      this.columnPointer = this.columnPointer + 1;
    } else if (this.currentDirection === "down") {
      this.rowPointer = this.rowPointer + 1;
    } else if (this.currentDirection === "left") {
      this.columnPointer = this.columnPointer - 1;
    } else {
      this.rowPointer = this.rowPointer - 1;
    }
  };

  isNextValueValid = () => {
    let nextValue;
    if (this.currentDirection === "right") {
      const rowValue = this.matrix[this.rowPointer];
      nextValue = rowValue && rowValue[this.columnPointer + 1];
    } else if (this.currentDirection === "down") {
      const rowValue = this.matrix[this.rowPointer + 1];
      nextValue = rowValue && rowValue[this.columnPointer];
    } else if (this.currentDirection === "left") {
      const rowValue = this.matrix[this.rowPointer];
      nextValue = rowValue && rowValue[this.columnPointer - 1];
    } else {
      const rowValue = this.matrix[this.rowPointer - 1];
      nextValue = rowValue && rowValue[this.columnPointer];
    }
    return typeof nextValue !== "undefined";
  };

  changeDirection = () => {
    if (this.currentDirection === "right") {
      this.currentDirection = "down";
    } else if (this.currentDirection === "down") {
      this.currentDirection = "left";
    } else if (this.currentDirection === "left") {
      this.currentDirection = "up";
    } else {
      this.currentDirection = "right";
    }
  };
}

const spiralOrderOld = function (matrix) {
  if (matrix.length === 0) return [];

  const lector = new MatrixLector(matrix);
  let consecutiveDirectionChanges = 0;
  const result = [];

  while (consecutiveDirectionChanges < 3) {
    // this could be "number of total elements instead of direction changes",
    // in this way, I could use a counter for the number of elements already visited
    lector.cleanCurrentValue();
    if (lector.isNextValueValid()) {
      consecutiveDirectionChanges = 0;
    } else {
      lector.changeDirection();
      consecutiveDirectionChanges++;
    }

    lector.moveToNextValue();
    if (typeof lector.getCurrentValue() !== "undefined") {
      result.push(lector.getCurrentValue());
    }
  }

  return result;

  /*
    Time complexity: linear O(n)
    Space complexity: linear O(n)
  */
};

const directions = {
  RIGHT: "DOWN",
  DOWN: "LEFT",
  LEFT: "UP",
  UP: "RIGHT",
};

const spiralOrder = (matrix) => {
  total = matrix.length * (matrix[0] || []).length;
  let currentDirection = "RIGHT";
  let result = [];
  let vector = [0, 0];

  while (total > 0) {
    const row = vector[0];
    const col = vector[1];
    result.push(matrix[row][col]);
    matrix[row][col] = undefined;
    total--;

    if (currentDirection === "RIGHT") {
      if (typeof (matrix[row] && matrix[row][col + 1]) !== "undefined") {
        vector[1] = col + 1;
      } else {
        currentDirection = directions.RIGHT;
        vector[0] = row + 1;
      }
    } else if (currentDirection === "DOWN") {
      if (typeof (matrix[row + 1] && matrix[row + 1][col]) !== "undefined") {
        vector[0] = row + 1;
      } else {
        currentDirection = directions.DOWN;
        vector[1] = col - 1;
      }
    } else if (currentDirection === "LEFT") {
      if (typeof (matrix[row] && matrix[row][col - 1]) !== "undefined") {
        vector[1] = col - 1;
      } else {
        currentDirection = directions.LEFT;
        vector[0] = row - 1;
      }
    } else {
      if (typeof (matrix[row - 1] && matrix[row - 1][col]) !== "undefined") {
        vector[0] = row - 1;
      } else {
        currentDirection = directions.UP;
        vector[1] = col + 1;
      }
    }
  }

  return result;

  /*
    Time complexity: linear O(n)
    Space complexity: linear O(n)
  */
};

console.log(
  spiralOrder([
    [2, 5, 8],
    [4, 0, -1],
  ])
);

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // Output: [1,2,3,6,9,8,7,4,5]

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
); // Output: [1,2,3,4,8,12,11,10,9,5,6,7]
