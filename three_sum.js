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

const getTwoSum = (num, nums) => {
  let results = [];

  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    if (nums[low] + nums[high] === -num) {
      results.push([num, nums[low], nums[high]]);

      low++;
      while (nums[low - 1] === nums[low]) {
        low++;
      }
    }

    if (nums[low] + nums[high] > -num) {
      high--;
    }

    if (nums[low] + nums[high] < -num) {
      low++;
    }
  }

  return results;
};

const threeSum = (nums) => {
  let results = [];
  let lastNumber;
  let sortedNums = nums.sort((a, b) => a - b);

  let counter = 0;
  while (counter < sortedNums.length) {
    const currNumber = sortedNums[counter];
    if (currNumber !== lastNumber) {
      const innerResult = getTwoSum(currNumber, [
        ...sortedNums.slice(counter + 1),
      ]);
      results = results.concat(innerResult);
    }

    lastNumber = currNumber;
    counter++;
  }

  return results;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
