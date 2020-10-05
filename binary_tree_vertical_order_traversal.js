function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let results = [];
let min = 0;
let counter = 0;

const fillResults = (node, col) => {
  if (!node) {
    return;
  }

  if (col < 0 && col < min) {
    min = col;
    counter++;
    results = [[]].concat(results);
  }

  results[col + counter] = (results[col + counter] || []).concat(node.val);
  fillResults(node.left, col - 1);
  fillResults(node.right, col + 1);
};

const verticalOrder = (root) => {
  fillResults(root, 0);
  return results;
};

const root = new TreeNode(
  3,
  new TreeNode(9, new TreeNode(4), new TreeNode(0)),
  new TreeNode(8, new TreeNode(1), new TreeNode(7))
);

console.log(verticalOrder(root));
