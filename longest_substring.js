const lengthOfLongestSubstring = (s) => {
  let hash = {};
  let maxSum = 0;
  let currentSum = 0;
  let counter = 0;

  while (s[counter] !== "" && typeof s[counter] !== "undefined") {
    console.log({ s, counter, hash: hash[s[counter]] });
    if (typeof hash[s[counter]] !== "undefined") {
      s = s.substring(hash[s[counter]] + 1);
      hash = {};
      counter = 0;
      currentSum = 0;
    } else {
      hash[s[counter]] = currentSum;
      currentSum += 1;
      maxSum = Math.max(maxSum, currentSum);
      counter++;
    }
  }

  return maxSum;
};

/*
"pwwkew"
hash = {p = 0, w= 2, k = 3, e = 4};
  let curr_sum = 3;
  let maxSum = 2;
  let counter = 4;

  s[0] = "e"

*/
const lengthOfLongestSubstring2 = (s) => {
  let hash = {};
  let curr_sum = 0;
  let maxSum = 0;
  let counter = 0;

  while (s[counter] !== "" && typeof s[counter] !== "undefined") {
    if (typeof hash[s[counter]] === "undefined") {
      hash[s[counter]] = counter;
      curr_sum++;
    } else {
      hash[s[counter]] = counter;
      maxSum = Math.max(maxSum, curr_sum);
      console.log({ curr_sum });
      console.log("maxSum", maxSum);
      curr_sum = 1;
    }
    counter++;
  }

  return maxSum;
};

// console.log(lengthOfLongestSubstring2("abcabcbb"));
// console.log(lengthOfLongestSubstring2("aab"));
console.log(lengthOfLongestSubstring2("pwwkew"));
