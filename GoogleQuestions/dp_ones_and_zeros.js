// You are given an array of binary strings strs and two integers m and n.

// Return the size of the largest subset of strs such that there are at most m 0's and n 1's in the subset.

// A set x is a subset of a set y if all elements of x are also elements of y.

// Example 1:

// Input: strs = ["10","0001","111001","1","0"], m = 5, n = 3
// Output: 4
// Explanation: The largest subset with at most 5 0's and 3 1's is {"10", "0001", "1", "0"}, so the answer is 4.
// Other valid but smaller subsets include {"0001", "1"} and {"10", "1", "0"}.
// {"111001"} is an invalid subset because it contains 4 1's, greater than the maximum of 3.
// Example 2:

// Input: strs = ["10","0","1"], m = 1, n = 1
// Output: 2
// Explanation: The largest subset is {"0", "1"}, so the answer is 2.

const findMaxForm = (strs, m, n) => {
  let dp = initialize2DArrayNew(m + 1, n + 1);
  for (const s of strs) {
    let zero = (one = 0);
    for (const c of s) {
      c == "0" ? zero++ : one++; //counting zeros and ones in each string
    }
    for (let i = m; i >= zero; i--) {
      // runs m-zero times
      for (let j = n; j >= one; j--) {
        // runs n-one times
        dp[i][j] = Math.max(dp[i][j], dp[i - zero][j - one] + 1); // filling array back wards
      }
    }
  }
  console.log(dp);
  return dp[m][n];
};

const initialize2DArrayNew = (m, n) => {
  let data = [];
  for (let i = 0; i < m; i++) {
    let tmp = new Array(n).fill(0);
    data.push(tmp);
  }
  return data;
};
var strs = ["10", "0001", "111001", "1", "0"],
  m = 5,
  n = 3;
console.log(findMaxForm(strs, m, n));
