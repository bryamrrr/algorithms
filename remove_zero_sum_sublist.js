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

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function (head) {
  let order = {};
  let order2 = {};
  let map = {};

  const dummy = new ListNode();
  dummy.next = head;
  let node = dummy;
  let sum = 0;
  let counter = 0;

  while (node) {
    sum += node.val;
    if (typeof map[sum] === "undefined") {
      map[sum] = node;
      order[sum] = counter;
      order2[counter] = sum;
      counter++;
    } else {
      let thatNodeCounter = order[sum];

      let currentNode = map[sum];
      currentNode.next = node.next;

      for (let i = counter; i > thatNodeCounter; i--) {
        console.log({ node, sum, mapValue: map[sum], i });
        const state = order2[i];
        sum -= order[state].val;
        order2[i] = undefined;

        order[state] = undefined;
        map[state] = undefined;
      }

      counter = thatNodeCounter;
    }

    node = node.next;
  }

  return dummy.next;
};

const head = new ListNode(
  1,
  new ListNode(2, new ListNode(-3, new ListNode(3, new ListNode(1))))
);

const head1 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(-3, new ListNode(4))))
);

const head2 = new ListNode(
  -4,
  new ListNode(
    0,
    new ListNode(
      -2,
      new ListNode(
        -2,
        new ListNode(
          4,
          new ListNode(
            3,
            new ListNode(
              0,
              new ListNode(
                5,
                new ListNode(
                  4,
                  new ListNode(
                    -4,
                    new ListNode(
                      -3,
                      new ListNode(
                        -4,
                        new ListNode(0, new ListNode(-3, new ListNode(3)))
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  )
);

console.log(removeZeroSumSublists(head2)); // [3,1]
