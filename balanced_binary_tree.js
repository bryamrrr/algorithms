function Node(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const getHeight = (node, depth = 0) => {
  if (!node) {
    return depth;
  }

  const left = getHeight(node.left, depth + 1);
  const right = getHeight(node.left, depth + 1);

  return Math.max(left, right);
};

const isBalancedHelper = (node) => {
  if (!node) {
    return [true, 0];
  }

  const [lBalanced, lHeight] = isBalancedHelper(node.left);
  const [rBalanced, rHeight] = isBalancedHelper(node.right);

  return [
    lBalanced && rBalanced && Math.abs(lHeight, rHeight) <= 1,
    Math.max(lHeight, rHeight) + 1,
  ];
};

var isBalanced = function (root) {
  // if (!root) {
  //   return true;
  // }

  // const dummy = root;

  // const left = getHeight(dummy.left);
  // const right = getHeight(dummy.right);

  // return (
  //   Math.abs(left - right) <= 1 &&
  //   isBalanced(root.left) &&
  //   isBalanced(root.right)
  // );

  return isBalancedHelper(root)[0];

  /*
    Time complexity: Linear because of the DFS = O(n)
    Space complexity: Linear because of the recursion stack = O(n)
  */
};

const node1 = new Node(3, new Node(9), new Node(20, new Node(15), new Node(7)));
console.log(isBalanced(node1));

const node2 = new Node(
  1,
  new Node(2, new Node(3, new Node(4), new Node(4)), new Node(3)),
  new Node(2)
);
console.log(isBalanced(node2));
