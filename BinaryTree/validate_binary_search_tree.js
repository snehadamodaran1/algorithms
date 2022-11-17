function isValidBST(root, min, max) {
  if (!root) {
    return true;
  }

  if (min !== undefined && root.val <= min) {
    return false;
  }

  if (max !== undefined && root.val >= max) {
    return false;
  }

  return (
    isValidBST(root.left, min, root.val) &&
    isValidBST(root.right, root.val, max)
  ); // every left node we check should be the minium and evry rigght node should be max
}

// var isValidBST = function (root) {
//   if (!root) return true;
//   return dfs(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

//   function dfs(root, min, max) {
//     if (!root) return true;
//     if (root.val <= min || root.val >= max) return false;
//     return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
//   }
// };
