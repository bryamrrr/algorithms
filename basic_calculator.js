/*
  Create a simple calculator that given a string of operators (), +, -, *, /
  and numbers separated by spaces returns the value of that expression.

  Example: Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7
  
  Remember about the order of operations! Multiplications and divisions have a
  higher priority andshould be performed left-to-right. Additions and subtractions
  have a lower priority and should also be performed left-to-right.
*/

const simpleOperators = ["/", "*", "+", "-"];

const getValueFromSimpleOperations = (string) => {};

const trimSpaces = (string) => {
  const stringArr = string.split("");
  return stringArr.filter((char) => char !== " ").join("");
};

const Calculator = function () {
  this.evaluate = (string) => {
    const cleanString = trimSpaces(string);
    // do code here
  };
};

console.log(calculate.evaluate("127"));
