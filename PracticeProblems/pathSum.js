var Node = function (val, left, right) {
  this.val = val == undefined ? 0 : val;
  this.left = left == undefined ? null : left;
  this.right = right == undefined ? null : right;
};

var hasPathSum = function (root, targetSum) {
  var checkPathSum = function (root, sum, targetSum) {
    if (!root) {
      return false;
    }
    sum += root.val;

    if (root.left == null && root.right == null) {
      return sum == targetSum;
    }
    return (
      checkPathSum(root.left, sum, targetSum) ||
      checkPathSum(root.right, sum, targetSum)
    );
  };
  return checkPathSum(root, 0, targetSum);
};

const tree = new Node(
  5,
  new Node(4, new Node(11, new Node(7), new Node(2)), null),
  new Node(8, new Node(13), new Node(4, null, new Node(1)))
);

console.log(hasPathSum(tree, 12));
