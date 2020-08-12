/*
  Given a non-empty array of integers, return the k most frequent elements.

  Example 1:
    Input: nums = [1,1,1,2,2,3], k = 2
    Output: [1,2]

  Example 2:
    Input: nums = [1], k = 1
    Output: [1]

  Note:
    * You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
    * Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
    * It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.
    * You can return the answer in any order.
*/

const topFrequentElements = (nums, k) => {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }

  let pre = [];
  for (const num in obj) {
    const times = obj[num];
    if (pre[times]) {
      pre[times].push(num);
    } else {
      pre[times] = [num];
    }
  }

  let result = [];
  for (let i = 0; i < k; ) {
    const len = pre.length;
    const index = len - 1 - i;
    const current = pre[index];
    if (current) {
      const currentLen = current.length;
      result = result.concat(current);
      i += currentLen;
    }
  }

  return result;

  /*
    Time complexity: O(3n) = O(n)
    Space complexity: O(3n) = O(n)
  */
};

console.log(topFrequentElements([1, 1, 1, 2, 2, 3], 2)); // Output: [1,2]
console.log(topFrequentElements([1, 2], 2)); // Output: [1,2]
console.log(topFrequentElements([1], 1)); // Output: [1]
