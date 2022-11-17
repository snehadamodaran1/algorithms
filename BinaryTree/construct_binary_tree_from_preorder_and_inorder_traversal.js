var buildTree = function (preorder, inorder) {
  let inOrderIndexLookup = new Map();

  function helper(preStart, preEnd, inStart, inEnd) {
    if (preStart > preEnd || inStart > inEnd) return null;

    let value = preorder[preStart]; // position of root in inorder
    let index = inorder.indexOf(value); // because inorder does not have duplicates
    let leftTreeNodeCount = index - inStart;
    let root = new TreeNode(value);

    root.left = helper(
      preStart + 1,
      preStart + leftTreeNodeCount,
      inStart,
      index - 1
    );
    root.right = helper(
      preStart + leftTreeNodeCount + 1,
      preEnd,
      index + 1,
      inEnd
    );
    return root;
  }

  return helper(0, preorder.length - 1, 0, inorder.length - 1);
};
