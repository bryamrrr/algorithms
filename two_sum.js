/*
  Given an array of integers, return indices of the two numbers
  such that they add up to a specific target.

  You may assume that each input would have exactly one solution,
  and you may not use the same element twice.

  Example:
    Given nums = [2, 7, 11, 15], target = 9,
    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  nums = nums.sort((a, b) => a - b);

  while (left < right) {
    const result = nums[left] + nums[right];

    if (result === target) {
      return [left, right];
    } else if (result > target) {
      right--;
    } else {
      left++;
    }
  }

  return [];
  /*
    Time complexity = sort = O(log(n)) + loop O(n) = O(n)
    Space complexity = O(1) => Could be O(n) if we need to save multiple combinations
  */
};

console.log(twoSum([2, 3, 7, 11, 15], 18));
