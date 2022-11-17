var goodNodes = function (root) {
  let count = 0;
  var dfs = function (root, max) {
    if (!root) return null;
    if (root.val >= max) return count++;
    max = Math.max(root.val, max);
    dfs(root.left, max);
    dfs(root.right, max);
  };
  dfs(root, -Infinity);
  return count;
};
