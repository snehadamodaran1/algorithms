/**
 * Definition for a binary tree node.
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.cur = 0;
  this.nums = [];
  const inorderTraverse = (node) => {
    // use arrow function for this.nums
    if (!node) return;
    inorderTraverse(node.left);
    this.nums.push(node.val);
    inorderTraverse(node.right);
  };
  inorderTraverse(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  return this.nums[this.cur++];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.cur < this.nums.length;
};

var bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
console.log(bSTIterator.next()); // return 3
bSTIterator.next(); // return 7
bSTIterator.hasNext(); // return True
bSTIterator.next(); // return 9
bSTIterator.hasNext(); // return True
bSTIterator.next(); // return 15
bSTIterator.hasNext(); // return True
bSTIterator.next(); // return 20
bSTIterator.hasNext(); // return False
/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
