var binaryTreePaths = function (root) {
  const res = [];

  preOrder(root, "");

  return res;

  function preOrder(node, str) {
    if (node == null) return;

    str = str + node.val;

    // leaf
    if (node.left == null && node.right == null) {
      res.push(str);
      return;
    }

    str += "->";

    if (node.left) preOrder(node.left, str);
    if (node.right) preOrder(node.right, str);
  }
};
