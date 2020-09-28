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
const getDepth = (node, depth = 0) => {
  if (typeof node === "undefined") {
    return depth;
  }

  const leftDepth = getDepth(node.left, depth);
  const rightDepth = getDepth(node.right, depth);

  return Math.max(leftDepth, rightDepth) + 1;
};

const maxDepth = function (root) {
  // return getDepth(root);

  let counter = 0;
  let nodes = [root];

  while (nodes.length > 0) {
    let newNodes = [];
    nodes.forEach((node) => {
      if (node.left) {
        newNodes.push(node.left);
      }
      if (node.right) {
        newNodes.push(node.right);
      }
    });
    counter++;
    nodes = [...newNodes];
  }

  return counter;
};

const root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

console.log(maxDepth(root));
console.log(maxDepth(new TreeNode(3, new TreeNode(9))));
