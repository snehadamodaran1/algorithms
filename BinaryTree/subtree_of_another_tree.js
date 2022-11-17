var isSubtree = function (root, subRoot) {
  if (!root) return false;
  if (!subRoot) return true;
  if (isSameTree(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

var isSameTree = function (root1, root2) {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;

  return (
    root1.val === root2.val &&
    isSameTree(root1.left, root2.left) &&
    isSameTree(root1.right, root2.right)
  );
};
