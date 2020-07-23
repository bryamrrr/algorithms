const permute = (originalNums, values = []) => {
  const nums = [...originalNums];
  if (nums.length === 0) {
    return [values];
  }

  let results = [];
  nums.forEach((number, i) => {
    inner_nums = [...nums];
    inner_nums.splice(i, 1);
    results = results.concat(permute(inner_nums, values.concat([number])));
  });

  return results;
};

console.log("Solution: ", permute([1, 2, 3]));
