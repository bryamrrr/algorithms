/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const getDepth = (node, depth) => {
  if (typeof node === "undefined") {
    return depth - 1;
  }

  const leftDepth = getDepth(node.left, depth + 1);
  const rightDepth = getDepth(node.right, depth + 1);

  return Math.max(leftDepth, rightDepth);
};

const maxDepth = function (root) {
  return getDepth(root, 1);
};

const root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

// console.log(maxDepth(root));
console.log(maxDepth(new TreeNode(3, new TreeNode(9))));
