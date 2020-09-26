/*
  Merge two sorted linked lists and return it as a new sorted list.
  The new list should be made by splicing together the nodes of the first two lists.
*/

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val;
  this.next = next;

  this.print = () => {
    let string = `${this.val}`;
    let node = this.next;
    while (node && node.val) {
      string += ` ~> ${node.val}`;
      node = node.next;
    }
    return string;
  };
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
  const dummy = new ListNode(0);
  dummy.next = l1;
  let n1 = dummy.next;

  while (
    n1 &&
    l2 &&
    typeof n1.val !== "undefined" &&
    typeof l2.val !== "undefined"
  ) {
    while (n1.val && l2.val && n1.next < l2.next) {
      n1 = n1.next;
    }

    const templ2 = l2;
    l2 = n1.next;
    n1.next = templ2;
    n1 = n1.next;
  }

  return dummy.next;

  /*
    Time complexity: linear O(n)
    Space complexity: linear O(n)
  */
};

const mergelists = function (arr) {
  let lists = [...arr];

  while (lists.length > 1) {
    nodes = [];

    let counter = 0;
    while (counter < Math.ceil(lists.length / 2)) {
      if (counter === lists.length - 1) {
        nodes.push(lists[counter]);
      } else {
        const result = mergeTwoLists(lists[counter], lists[counter + 1]);
        console.log("result", result.print());
        nodes.push(result);
      }

      lists = nodes;
      counter++;
    }
  }

  return lists[0].print();
};

// const n1 = new ListNode(1, new ListNode(2, new ListNode(4)));
// const n2 = new ListNode(1, new ListNode(3, new ListNode(4)));
// console.log({
//   n1,
//   n2,
//   result: mergeTwoLists(n1, n2),
// });

const nn1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const nn2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const nn3 = new ListNode(1, new ListNode(6));

console.log(mergelists([nn1, nn2, nn3])); // 1->1->2->3->4->4->5->6
