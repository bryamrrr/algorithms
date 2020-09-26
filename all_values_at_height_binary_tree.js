function Node(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

const getValues = (node, counter, level) => {
  if (!node || typeof node.val === "undefined") {
    return [];
  }

  if (counter === level) {
    return [node.val];
  }

  let results = [];
  results = results.concat(getValues(node.left, counter + 1, level));
  results = results.concat(getValues(node.right, counter + 1, level));
  return results;
};

const getAllValuesAtHeight = (node, level) => {
  let counter = 0;
  if (typeof node.val === "undefined" || level === 0) {
    return [];
  }

  return getValues(node, counter + 1, level);

  /*
    Time complexity: Linear because of the DFS = O(n)
    Space complexity: Linear because of the recursion stack = O(n)
  */
};

const root = new Node(
  1,
  new Node(2, new Node(4), new Node(5)),
  new Node(3, undefined, new Node(7))
);
console.log(getAllValuesAtHeight(root, 3)); // [4, 5, 7]
