var longestOnes = function (A, K) {
  let left = 0;
  let max = 0;
  let zeros = 0;

  A.forEach((item, right) => {
    if (item === 0) {
      zeros++;
    }

    while (left <= right && zeros > K) {
      if (A[left] === 0) {
        zeros--;
      }
      left++;
    }

    max = Math.max(max, right - left + 1);
  });

  return max;
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(longestOnes([0, 1], 1));
