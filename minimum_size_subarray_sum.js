/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (s, nums) {
  let left = 0;
  let right = 0;
  let result = [];

  let sum = 0;
  if (nums[right]) {
    sum += nums[right];
  }
  while (left < nums.length || right < nums.length) {
    if (sum < s) {
      right++;
      sum += nums[right];
    } else {
      if (result.length === 0 || right - left + 1 < result.length) {
        result = nums.slice(left, right + 1);
      }
      sum -= nums[left];
      left++;
    }
  }

  return result.length;

  /*
    Time complexity: O(2n) = O(n) linear time
    Space complexity: O(2 + k) = O(1) constant space
  */
};

var subarraySum = function (nums, k) {
  if (typeof nums === "undefined" || nums.length === 0) {
    return 0;
  }

  let low = 0;
  let high = 1;
  let sum = nums[low];

  while (k !== sum || typeof nums[high] !== "undefined") {
    console.log({ k, sum, low, high, validation });
    if (k > sum) {
      sum += nums[high];
      high++;
    } else if (high > low) {
      sum -= nums[low];
      low++;
    } else {
      sum += nums[high];
      high++;
    }

    if (isNaN(sum)) {
      return console.log({ k, sum, low, high });
    }
  }

  if (k === sum) {
    return high - low;
  }

  return 0;
};

console.log(subarraySum([1, 2, 3], 3)); // 2
// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2
