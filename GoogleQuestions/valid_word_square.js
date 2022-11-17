// Given a sequence of words, check whether it forms a valid word square.

// A sequence of words forms a valid word square if the k^th row and column read the exact same string, where 0 ≤ k < max(numRows, numColumns).

// Contact me on wechat to get Amazon、Google requent Interview questions . (wechat id : jiuzhang0607)

// The number of words given is at least 1 and does not exceed 500.
// Word length will be at least 1 and does not exceed 500.
// Each word contains only lowercase English alphabet a-z.
// Example
// Example1

// Input:
// [
//   "abcd",
//   "bnrt",
//   "crmy",
//   "dtye"
// ]
// Output: true
// Explanation:
// The first row and first column both read "abcd".
// The second row and second column both read "bnrt".
// The third row and third column both read "crmy".
// The fourth row and fourth column both read "dtye".

// Therefore, it is a valid word square.

function validWordSquare(words) {
  if (words == null || words.length == 0) {
    return true;
  }
  var n = words.length;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < words[i].length; j++) {
      if (
        j >= n ||
        words[j].length <= i ||
        words[j].charAt(i) != words[i].charAt(j)
      )
        return false;
    }
  }
  return true;
}
var words = ["abcd", "bnrt", "crm", "dt"];
console.log(validWordSquare(words));
