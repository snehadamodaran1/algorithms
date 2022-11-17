class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// var closestValue = function (root, target) {
//   //   console.log(root);
//   var min = Infinity,
//     minNode;
//   function preorder(node) {
//     if (node == null) return;
//     let diff = Math.abs(node.val - target);
//     if (diff < min) {
//       min = diff;
//       minNode = node;
//     }
//     preorder(node.left);
//     preorder(node.right);
//   }
//   preorder(root);
//   return minNode.val;
//   //   console.log(minNode.val);
// };

// optimized
const closestValue = function (root, target) {
  let closest = root.val;
  while (root !== null) {
    if (Math.abs(root.val - target) < Math.abs(closest - target)) {
      closest = root.val;
    }
    if (target < root.val) {
      root = root.left;
    } else {
      root = root.right;
    }
  }
  closest;
};

var tree = new TreeNode(
  5,
  new TreeNode(4, new TreeNode(2), null),
  new TreeNode(9, new TreeNode(8), new TreeNode(10))
);
closestValue(tree, 5.6);
