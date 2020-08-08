/*
Given an array nums with n integers, your task is to check if
it could becomenon-decreasing by modifying at most 1 element.

We define an array is non-decreasing if
nums[i] <= nums[i + 1] holds for every i (0-based)such that (0 <= i <= n - 2).

Example 1:
  Input: nums = [4,2,3]
  Output: true
  Explanation: You could modify the first 4 to 1 to get a non-decreasing array.

Example 2:
  Input: nums = [4,2,1]
  Output: false
  Explanation: You can't get a non-decreasing array by modify at most one element.

Constraints:

  1 <= n <= 10 ^ 4
  - 10 ^ 5 <= nums[i] <= 10 ^ 5
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const checkPossibility = function (nums) {
  let index_problem = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      if (index_problem !== -1) {
        return false;
      }
      index_problem = i;
    }
  }

  if (index_problem === 0 || index_problem === -1) {
    return true;
  }

  if (index_problem === nums.length - 2) {
    return true;
  }

  if (
    nums[index_problem - 1] &&
    nums[index_problem + 1] &&
    nums[index_problem - 1] <= nums[index_problem + 1]
  ) {
    return true;
  }

  if (
    nums[index_problem] &&
    nums[index_problem + 2] &&
    nums[index_problem] <= nums[index_problem + 2]
  ) {
    return true;
  }

  return false;
};

nums = [4, 2, 3];
console.log(checkPossibility(nums)); // true

nums = [4, 2, 1];
console.log(checkPossibility(nums)); // false

nums = [3, 4, 2, 3];
console.log(checkPossibility(nums)); // false
