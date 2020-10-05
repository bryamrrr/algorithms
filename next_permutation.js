var nextPermutation = function (nums) {
  let index = nums.length - 1;
  let found = false;
  while (!found && index - 1 >= 0) {
    if (nums[index] > nums[index - 1]) {
      found = true;
    } else {
      index--;
    }
  }

  if (found) {
    let indexToSwap = index - 1;
    let otherToSwap = index;
    found = false;
    while (!found && nums[index + 1]) {
      if (
        nums[otherToSwap] > nums[index + 1] &&
        nums[index + 1] > nums[indexToSwap]
      ) {
        otherToSwap = index + 1;
        found = true;
      } else {
        index++;
      }
    }

    const temp = nums[indexToSwap];
    nums[indexToSwap] = nums[otherToSwap];
    nums[otherToSwap] = temp;

    return nums
      .slice(0, indexToSwap + 1)
      .concat(nums.slice(indexToSwap + 1).sort((a, b) => a - b));
  }

  return nums.reverse();
};

console.log(nextPermutation([1, 3, 2]));
