/*
  Given the head of a linked list, we repeatedly delete consecutive sequences of nodes that
  sum to 0 until there are no such sequences.
  After doing so, return the head of the final linked list.  You may return any such answer. 

  (Note that in the examples below, all sequences are serializations of ListNode objects.)

  Example 1:
    Input: head = [1,2,-3,3,1]
    Output: [3,1]
    Note: The answer [1,2,1] would also be accepted.
*/

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const generateNewList = (cache) => {
  return new ListNode();
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const removeZeroSumSublists = (head) => {
  const cache = {};

  let selectedNode = head;
  let currentNode = head;
  while (currentNode.next === null) {
    let sum;
    while (sum !== 0 || currentNode.next === null) {
      sum = (sum || 0) + currentNode.val;
      currentNode = currentNode.next;
    }

    if (sum === 0) {
      selectedNode = currentNode;
    }
  }

  return currentNode;
};

const head = new ListNode(
  1,
  new ListNode(2, new ListNode(-3, new ListNode(3, new ListNode(1))))
);

console.log(removeZeroSumSublists(head)); // [3,1]
