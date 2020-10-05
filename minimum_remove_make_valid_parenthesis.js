/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  const string = s.split("");
  let stack = [];

  let counter = 0;
  while (string[counter]) {
    console.log("iteration", string[counter], stack);
    if (string[counter] === "(") {
      stack.push([string[counter], counter]);
      counter++;
    } else if (
      string[counter] === ")" &&
      stack[stack.length - 1] &&
      stack[stack.length - 1][0] === "("
    ) {
      stack.pop();
      counter++;
    } else if (string[counter] === ")" && !stack[stack.length - 1]) {
      string.splice(counter, 1);
    } else {
      counter++;
    }
  }

  for (i = stack.length - 1; i >= 0; i--) {
    const index = stack[i][1];
    string.splice(index, 1);
  }

  return string.join("");
};

console.log(minRemoveToMakeValid("lee(t(c)o)de)"));
