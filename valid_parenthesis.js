function validParentheses(parens) {
  let stack = [];

  const arr = parens.split("");

  let counter = 0;
  while (counter < arr.length) {
    if (arr[counter] === "(") {
      stack.push(arr[counter]);
    } else if (stack[stack.length - 1] === "(") {
      stack.pop();
    } else {
      return false;
    }
    counter++;
  }

  if (stack.length > 0) {
    return false;
  }

  return true;

  /*
    In this case, space complexity could be decreased to constant O(1) if I use a counter
    instead of a stack to know how many open parenthesis there is.
  */
}

function validBraces(parens) {
  let stack = [];

  const arr = parens.split("");
  const pairs = {
    "]": "[",
    ")": "(",
    "}": "{",
  };
  const openPairs = ["(", "[", "{"];

  let counter = 0;
  while (counter < arr.length) {
    const currentBrace = arr[counter];
    if (openPairs.includes(currentBrace)) {
      stack.push(arr[counter]);
    } else if (stack[stack.length - 1] === pairs[currentBrace]) {
      stack.pop();
    } else {
      return false;
    }
    counter++;
  }

  if (stack.length > 0) {
    return false;
  }

  return true;
}

// console.log(validParentheses("()"));
// console.log(validParentheses("())"));
console.log(validBraces("(){}[]"));
console.log(validBraces("[(])"));
