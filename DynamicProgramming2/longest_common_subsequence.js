function longestCommonSubsequence(text1, text2) {
  let [len1, len2] = [text1.length, text2.length];
  let dp = [...new Array(len1 + 1)].map(() => new Array(len2 + 2).fill(0));

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[len1][len2];
}
let text1 = "abcde",
  text2 = "ace";

console.log(longestCommonSubsequence(text1, text2));
// function longestCommonSubsequence(s1, s2) {
//     if (s2.length < s1.length) {
//       let temp = s1;
//       s1 = s2;
//       s2 = temp;
//     }

//     let previous = Array(s1.length + 1).fill(0);
//     let current = Array(s1.length + 1).fill(0);

//     for (let col = s2.length - 1; col >= 0; col--) {
//       for (let row = s1.length - 1; row >= 0; row--) {
//         if (s1.charAt(row) === s2.charAt(col)) {
//           current[row] = 1 + previous[row + 1];
//         } else {
//           current[row] = Math.max(previous[row], current[row + 1]);
//         }
//       }
//       let temp = previous;
//       previous = current;
//       current = temp;
//     }

//     return previous[0];
//   }




function longestConsecutive(nums) {
  let max = 0;
  const map = {};
  for (let num of nums) {
    if (map[num] != null) {
      continue;
    }
    l = map[num - 1] || 0;
    r = map[num + 1] || 0;
    len = l + r + 1;

    map[num - l] = len;
    map[num] = len;
    map[num + r] = len;

    max = Math.max(max, len);
  }

  return max;
}