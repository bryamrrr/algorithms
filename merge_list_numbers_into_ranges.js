/*
[0, 1, 2, 5, 7, 8, 9, 9, 10, 11]

// Pointers
pointer = 1

if (array.length === 0) {
  return []
};

if (array.length === 1) {
  return array[0]
}

results = [];
result = [array[poointer - 1]];
value = array[pointer - 1]
while pointer < array.length
  while (array[pointer] !== undefined && value >= array[pointer] - 1)
    result.push(array[pointer])
    value = array[pointer];
    pointer++;
  
  results.push(result);
  result = []
  pointer++;

*/

const getRanges = (arr) => {
  if (arr.length === 0) {
    return [];
  }

  if (arr.length === 1) {
    return arr[0];
  }

  let results = [];
  let pointer = 1;
  let value = arr[pointer - 1];
  let result = [value];

  while (pointer < arr.length) {
    while (value >= arr[pointer] - 1) {
      result.push(arr[pointer]);
      value = arr[pointer];
      pointer++;
    }

    results.push(result);
    value = arr[pointer];
    result = [value];
    pointer++;
  }

  if (result.length > 0) {
    results.push(result);
  }

  return results;

  /*
    Time complexity: linear time O(n)
    Space complexity: linear space O(n)
  */
};

console.log(getRanges([0, 1, 2, 5, 7, 8, 9, 9, 10, 11, 15]));
