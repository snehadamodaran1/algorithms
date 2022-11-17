var Node = function (val, left, right) {
  this.val = val == undefined ? 0 : val;
  this.left = left == undefined ? null : left;
  this.right = right == undefined ? null : right;
};
var diameter = function (root) {
  let max = 0;

  var maxDepth = function (root) {
    if (!root) return 0;

    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    max = Math.max(max, leftDepth + rightDepth);
    return Math.max(leftDepth, rightDepth) + 1;
  };
  maxDepth(root);
  return max;
};
const tree = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3));
// console.log(tree);
console.log(diameter(tree));

// const diameterOfBinaryTree = function(root) {
//     let res = 0;
//     const countDepth = function(root) {
//         if (!root) return 0;
//         let left = countDepth(root.left);
//         let right = countDepth(root.right);
//         res = Math.max(res, left + right);
//         return Math.max(left,right) + 1;
//     }
//     countDepth(root);
//     return res;
// };
