function Node(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var isBalanced = function (root) {
  let balanced = true;
  function checkDepth(root) {
    if (!root) return true;

    let leftDepth = checkDepth(root.left);
    let rightDepth = checkDepth(root.right);

    if (Math.abs(leftDepth - rightDepth) > 1) balanced = false;

    return Math.max(rightDepth, leftDepth) + 1;
  }
  checkDepth(root);
  return balanced;
};

const tree = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3));
console.log(isBalanced(tree));
