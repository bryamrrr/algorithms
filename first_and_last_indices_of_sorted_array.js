/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  let index1 = -1;
  let index2 = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (index1 === -1) {
        index1 = i;
      }
      index2 = i;
    }
  }

  return [index1, index2];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
