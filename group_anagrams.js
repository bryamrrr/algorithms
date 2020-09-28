/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let results = [];

  while (strs.length > 0) {
    let word = strs[0].split("");
    let innerResult = [strs[0]];
    console.log("strs[0]", strs[0]);
    strs.splice(0, 1);

    let counter = 0;
    while (counter < strs.length) {
      let cloneWord = [...word];
      let currentWord = strs[counter].split("");

      let isAnagram = true;
      currentWord.forEach((char) => {
        if (cloneWord.length === 0) {
          // word is smaller than current
          isAnagram = false;
        } else {
          const index = cloneWord.indexOf(char);
          if (index > -1) {
            cloneWord.splice(index, 1);
          } else {
            isAnagram = false;
          }
        }
      });

      if (isAnagram && cloneWord.length === 0) {
        // It's an anagram
        innerResult.push(strs[counter]);
        strs.splice(counter, 1);
      } else {
        counter++;
      }
    }

    results.push(innerResult);
  }

  return results;

  /*
    Time complexity = O(n**2)
    Space complexity = O(n)
  */
};

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(input));
