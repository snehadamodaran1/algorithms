// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number[][]}
//  */
// var levelOrder = function (root) {
//   if (!root) return [];
//   const queue = [root],
//     result = [];
//   while (queue.length) {
//     const size = queue.length,
//       values = [];
//     for (let i = 0; i < size; i++) {
//       const node = queue.shift();
//       values.push(node.val);
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     result.push(values);
//   }
//   return result;
// };

// // BFS
// var levelOrder = function (root) {
//   let q = [root];
//   const res = [];
//   while (q.length) {
//     let next = [];
//     let vals = [];
//     for (let n of q) {
//       if (!n) continue; /// imp
//       vals.push(n.val); //pushing value
//       next.push(n.left); // pushing left node - type is node
//       next.push(n.right); // pushinf right node
//     }
//     q = next;
//     if (vals.length) res.push(vals);
//   }
//   return res;
// };

// Breadth first search - Use queue!
var levelOrder = function (root) {
  var queue = [root];
  res = [];
  while (queue.length) {
    next = [];
    vals = []; // to store traversal for each level
    for (let n of queue) {
      vals.push(n.val);
      next.push(n.left);
      next.push(n.right);
    }
    queue = next;
    if (vals.length) res.push(vals);
  }
  return res;
};
