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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  var result = null;
  var count = 0;
  function bst(node) {
    if (!node) return;
    bst(node.left);

    count += 1;
    if (count == k) result = node.val;
    bst(node.right);
  }
  bst(root);
  return result;
};
