function Node(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const getUnivalTrees = (node) => {
  if (!node) {
    return [true, 0];
  }

  if (!node.left && !node.right) {
    return [true, 1];
  }

  let count = 0;
  let isUnival = false;

  let [leftUnival, leftCount] = getUnivalTrees(node.left);
  let [rightUnival, rightCount] = getUnivalTrees(node.right);
  count = leftCount + rightCount;

  if (
    (node.left && leftUnival && !node.right && node.left.val === node.val) ||
    (node.right && rightUnival && !node.left && node.right.val === node.val) ||
    (node.right &&
      node.left &&
      leftUnival &&
      rightUnival &&
      node.right.val === node.val &&
      node.left.val === node.val)
  ) {
    count += 1;
    isUnival = true;
  }

  return [isUnival, count];

  /*
    Time complexity: Linear because of the DFS = O(n)
    Space complexity: Linear because of the recursion stack = O(n)
  */
};

const countUnivalSubtrees = function (root) {
  return getUnivalTrees(root)[1];
};

const root = new Node(
  5,
  new Node(1, new Node(5), new Node(5)),
  new Node(5, undefined, new Node(5))
);

console.log(countUnivalSubtrees(root));

const root2 = new Node(
  2,
  new Node(1),
  new Node(2, new Node(1, new Node(1), new Node(1)), new Node(2))
);

console.log(countUnivalSubtrees(root2));

const root3 = new Node(
  1,
  new Node(1, new Node(5), new Node(5)),
  new Node(1, undefined, new Node(5))
);

console.log(countUnivalSubtrees(root3));
