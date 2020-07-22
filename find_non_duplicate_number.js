/*
# Find the non-duplicate number

Given an array, find the non-duplicate number.

 
Example

Input:
[4, 3, 2, 4, 1, 3, 2]

Output:
1

*/

const findNonDuplicate = function (arr) {
  const objFromArray = arr.reduce((obj, item) => {
    let value = obj[item] || 0;
    value += 1;

    return {
      ...obj,
      [item]: value,
    };
  }, {});

  let nonDuplicate = undefined;
  const keys = Object.keys(objFromArray);

  keys.forEach((key) => {
    if (objFromArray[key] === 1) {
      nonDuplicate = key;
    }
  });

  console.log(`Non-duplicate number is: ${nonDuplicate}`);
  return nonDuplicate;

  /*
    Time complexity: n + 1 + 1 + n + 1 = 2n = n
    Space complexity: n(the hash is linear) + 1 + n(keys array) = 2n = n
  */
};

const findNonDuplicate2 = function (arr) {
  let nonDuplicate = 0;

  arr.forEach((number) => {
    nonDuplicate ^= number; // Using Bitwise XOR https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR
  });

  console.log(`Non-duplicate number is: ${nonDuplicate}`);
  return nonDuplicate;

  /*
    Time complexity: 1 + n + 1 = n
    Space complexity: 1 (?) = Constant! It's an improvement compared to the first solution
  */
};

findNonDuplicate2([4, 3, 2, 4, 1, 3, 2]);
