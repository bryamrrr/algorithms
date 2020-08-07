const product = (arr) => {
  const results = [];
  for (let i = 0; i < arr.length; i++) {
    let result = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        result *= arr[j];
      }
    }
    results.push(result);
  }

  return results;

  /*
    Time complexity: O(n^2)
    Space complexity: O(n)
  */
};

const product2 = (arr) => {
  let right = [];
  let prod = 1;

  for (let i = arr.length - 1; i > 0; i--) {
    prod *= arr[i];
    right.unshift(prod);
  }

  prod = 1;
  result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    result.push(prod * right[i]);
    prod *= arr[i];
  }
  result.push(prod);

  return result;

  /*
    Time complexity: O(2n) = O(n)
    Space complexity: O(n)
  */
};

console.log(product2([1, 2, 3, 4])); // [ 24, 12, 8, 6 ]
