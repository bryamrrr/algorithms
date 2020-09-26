/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  let current = 0;

  while (current <= high) {
    if (nums[current] === 0) {
      const temp = nums[low];
      nums[low] = nums[current];
      nums[current] = temp;

      current += 1;
      low += 1;
    } else if (nums[current] === 2) {
      const temp = nums[high];
      nums[high] = nums[current];
      nums[current] = temp;

      high -= 1;
    } else {
      current += 1;
    }
  }

  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
