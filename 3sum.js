var threeSum = function (nums) {
  let cache = {};
  let results = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const triplet = [nums[i], nums[j], nums[k]];
          const result = triplet.sort();
          if (!cache[`${result[0]}${result[1]}${result[2]}`]) {
            cache[`${result[0]}${result[1]}${result[2]}`] = 1;
            results.push(triplet);
          }
        }
      }
    }
  }

  return results;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); //
