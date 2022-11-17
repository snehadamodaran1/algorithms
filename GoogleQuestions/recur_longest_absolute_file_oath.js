var lengthLongestPath = function (input, level = 0) {
  let re = new RegExp(`\n\t{${level}}(?!\t)`, "g");
  //   console.log(re);
  let nodes = input.split(re);
  console.log(nodes);
  let max = 0;
  for (let node of nodes) {
    let len = node.indexOf("\n");
    if (len === -1) {
      // leaf node
      if (~node.indexOf(".")) {
        // has file
        max = Math.max(max, node.length);
      }
    } else {
      let childLen = lengthLongestPath(node.substr(len + level + 2), level + 1);
      if (childLen > 0) {
        max = Math.max(max, len + childLen);
      }
    }
  }
  return max ? !!level + max : 0; // !!level to account for the slash character
};

// var lengthLongestPath = function(input) {
//     const map = {};
//     let maxLen = 0;

//     for(let line of input.split('\n')) {
//         const depth = (line.match(/\t/g) || []).length;
//         // console.log(depth)
//         map[depth] = line.length - depth + (map[depth-1] || 0);
//         console.log(line.length, depth,(map[depth-1] || 0))
//         if(/\./.test(line)) maxLen = Math.max(maxLen, depth + map[depth]);
//     }
//     console.log(maxLen)
//     return maxLen;
// };

// var lengthLongestPath = function(input) {
//     // The solution could use Stack to solve. But I found if reach next same level, the previous dir length is useless. So I applied an array to store the length. Index represent the level. But I still call it stack.
//     if (input === null || input.length === 0) {
//         return input;
//     }
//     let stack = new Array(input.length + 1);
//     stack.fill(0);
//     let result = 0;

//     let dirs = input.split(/\n/);
//     for (let d of dirs) {
//         d = d.replace(/\t/g, "&");// if use '/\t/', only the first '\t' will be replaced.
//         let level = d.lastIndexOf("&") + 1;
//         let length = stack[level] + d.length - level + 1;// remove the '\t'.length and plus the '/' length
//         if (d.includes('.')) {
//             result = Math.max(result, length - 1);// remove the '/' length
//         } else {
//             stack[level + 1] = length;
//         }
//     }
//     return result;
// }
path =
  "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext";
lengthLongestPath(path);
