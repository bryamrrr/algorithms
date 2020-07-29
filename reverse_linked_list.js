/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const reverse = (list) => {
  let currentNode = list;
  let newLinkedList = null;

  while (currentNode !== null) {
    newLinkedList = new ListNode(currentNode.val, newLinkedList);
    currentNode = currentNode.next;
  }

  return newLinkedList;

  /*
    Time complexity: O(n)
    Space complexity: O(n)
  */
};

const reverse2 = (list) => {
  let current = list;
  let prev = null;

  while (current !== null) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

  return prev;

  /*
    Time complexity: O(n)
    Space complexity: O(1)
  */
};

const linkedList = new ListNode(
  5,
  new ListNode(6, new ListNode(7, new ListNode(8)))
);
console.log(reverse2(linkedList));
