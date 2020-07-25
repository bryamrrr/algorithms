/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const getCorrectValueFromList = (list) => {
  let sum = 0;
  let currentNode = list;
  let counter = 0;
  while (currentNode !== null) {
    sum += currentNode.val * Math.pow(10, counter);
    currentNode = currentNode.next;
    counter++;
  }

  return sum;
};

var addTwoNumbers = function (l1, l2) {
  const num1 = getCorrectValueFromList(l1);
  const num2 = getCorrectValueFromList(l2);

  const resultNumber = num1 + num2;
  const resultString = resultNumber.toString();
  const resultLen = resultString.length;

  let result = new ListNode(resultString[resultLen - 1]);
  let reference = result;
  for (let i = resultLen - 2; i >= 0; i--) {
    reference.next = new ListNode(resultString[i]);
    reference = reference.next;
  }
  return result;
};

const l1 = new ListNode(1);
l1.next = new ListNode(0);
l1.next.next = new ListNode(0);
l1.next.next.next = new ListNode(0);
l1.next.next.next.next = new ListNode(1);
const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
console.log(addTwoNumbers(l1, l2));
