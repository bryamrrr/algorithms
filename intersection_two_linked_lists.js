/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const stack1 = [];
  const stack2 = [];

  while (headA) {
    stack1.push(headA.val);
    headA = headA.next;
  }

  while (headB) {
    stack2.push(headB.val);
    headB = headB.next;
  }
  const result = [];
  let different = false;
  let counter = 1;
  while ((stack1.length > 0 && stack2.length > 0) || !different) {
    const el1 = stack1.pop();
    const el2 = stack2.pop();
    if (el1 === el2) {
      result.push(el1);
    } else {
      different = true;
    }
    counter++;
  }
  if (result.length === 0) {
    return undefined;
  }

  let node;
  let dummy = new ListNode(0);
  node = dummy;
  while (result.length > 0) {
    dummy.next = new ListNode(result.pop());
    dummy = dummy.next;
  }

  return node.next;

  /*
    Time complexity: O(4n) = O(n)
    Space complexity: Same
  */
};

var getIntersectionNode2 = function (headA, headB) {
  let dummy = headB;
  while (headA) {
    headB = dummy;
    while (headB) {
      if (headA === headB) {
        return headA;
      } else {
        headB = headB.next;
      }
    }
    headA = headA.next;
  }
};

const node = new ListNode(2, new ListNode(4));
const node1 = new ListNode(1, new ListNode(9, new ListNode(1, node)));
const node2 = new ListNode(3, node);

console.log(getIntersectionNode2(node1, node2));
