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
  /*
    Time complexity: O(n)
    Space complexity: O(1)
  */
};

// const binarSearchRange = function (nums, target) {
//   let index1 = -1;
//   let index2 = -1;

//   let lo = 0;
//   let hi = nums.length;
//   let left = false;
//   let mid = Math.floor(hi/2)

//   if (target  nums[mid]) {
//     left = true;
//     nums = nums.slice(lo, mid);
//     hi = mid - 1;
//   } else {
//     left = false;
//     nums = nums.slice(mid, hi)
//     lo = mid;
//   }

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       if (index1 === -1) {
//         index1 = i;
//       }
//       index2 = i;
//     }
//   }

//   return [index1, index2];
//   /*
//     Time complexity: O(logn)
//     Space complexity: O(1)
//   */
// };

// console.log(binarSearchRange([5, 7, 7, 8, 8, 10], 8));
