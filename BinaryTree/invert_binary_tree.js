// var root = [4, 2, 7, 1, 3, 6, 9];
// console.log(invertTree(root));

function Node(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var invertTree = function (root) {
  if (!root) return null;

  var tmp = root.left;
  root.left = root.right;
  root.right = tmp;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};

const tree = new Node(
  4,
  new Node(2, new Node(1), new Node(3)),
  new Node(7, new Node(6), new Node(9))
);
console.log(invertTree(tree));
