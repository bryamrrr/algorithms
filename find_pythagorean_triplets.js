const findPythagoreanTriplets = (arr) => {
  const squaredNumbers = arr.reduce((obj, item) => {
    return {
      ...obj,
      [item * item]: item,
    };
  }, {});

  for (const squaredValue in squaredNumbers) {
    for (const otherSquaredValue in squaredNumbers) {
      if (
        squaredNumbers[
          (parseInt(squaredValue) + parseInt(otherSquaredValue)).toString()
        ]
      ) {
        return [
          squaredNumbers[squaredValue],
          squaredNumbers[otherSquaredValue],
          squaredNumbers[
            (parseInt(squaredValue) + parseInt(otherSquaredValue)).toString()
          ],
        ];
      }
    }
  }

  /*
    Time complexity: O(n + n^2) O(n^2)
    Space complexity: O(n)
  */
};

const arr = [3, 5, 12, 5, 13];
console.log(findPythagoreanTriplets(arr)); // [5, 12, 13]
