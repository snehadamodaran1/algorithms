/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
  let ar = new Array();

  let solve = function (root, dist, y) {
    if (root == null) return;
    ar.push({ dist: dist, val: root.val, y: y });
    solve(root.left, dist - 1, y + 1);
    solve(root.right, dist + 1, y + 1);
    return;
  };

  solve(root, 0, 0);

  ar.sort((a, b) => a.dist - b.dist);

  let res = new Array();
  let i = 0;
  while (i < ar.length) {
    let j = i;
    let temp = new Array();
    while (j + 1 < ar.length && ar[j + 1].dist == ar[j].dist) {
      temp.push(ar[j++]);
    }
    temp.push(ar[j]);
    temp.sort((a, b) => {
      if (a.y == b.y) return a.val - b.val;
      return a.y - b.y;
    });
    res.push(temp.map((item) => item.val));
    i = j + 1;
  }
  return res;
};
