/*
  Given an array, find all the combinations of numbers which sum is 0
  * All numbers in the array are unique
*/

const threeSumBruteForce = (arr) => {
  let combinations = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          combinations.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }

  return combinations;

  /*
    Brute force solution
    Time complexity: O(n**3) => could be improved to O(n**2) using twoSum O(n) inside a for loop
    Space complexity: O(n)
  */
};

console.log(threeSumBruteForce([-1, 0, 1, 2, -4, -3])); // Output = [[-1, 0,1], [1,2,-3]]
