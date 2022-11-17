// You're given a string S of lower case alphabets. Let Xi be the number of substrings with atleast i distinct characters.

// Determine the value of Xi for all i, where i can take values in range [1, 26] (both inclusive)

// Constraints:
// N (length of S) is upto 5 * 10**5

// Examples:
// S = aabc

// For X1 -> 4 * (5) / 2 -> 10 (No of substrings with atleast 1 distinct characters)
// For X2 -> substrings with atleast 2 distinct characters are (aab, aabc, bc, abc, ab) -> 5
// For X3 -> substrings with atleast 3 distinct characters are (aabc, abc) -> 2
// For Xi where i >= 4, No substrings can have alteast > 4 distinct characters
// So, the answer will be [10, 5, 2, 0, 0, 0, 0, 0, 0, ----, 0] (length of the output must be 26 for Xi where i is from 1 to 26)

// Given a string s and an int k, return an int representing the number of substrings (not unique) of s with exactly k distinct characters. If the given string doesn't have k distinct characters, return 0.
// https://leetcode.com/problems/subarrays-with-k-different-integers

// Example 1:

// Input: s = "pqpqs", k = 2
// Output: 7
// Explanation: ["pq", "pqp", "pqpq", "qp", "qpq", "pq", "qs"]
// Example 2:

// Input: s = "aabab", k = 3
// Output: 0
// Constraints:

// The input string consists of only lowercase English letters [a-z]
// 0 ≤ k ≤ 26

function findCombinationsUtil(arr, index, num, reducedNum) {
  // Base condition
  if (reducedNum < 0) return;

  // If combination is
  // found, print it
  if (reducedNum == 0) {
    for (let i = 0; i < index; i++) document.write(arr[i] + " ");
    document.write("<br/>");
    return;
  }

  // Find the previous number
  // stored in arr[]. It helps
  // in maintaining increasing
  // order
  let prev = index == 0 ? 1 : arr[index - 1];

  // note loop starts from
  // previous number i.e. at
  // array location index - 1
  for (let k = prev; k <= num; k++) {
    // next element of
    // array is k
    arr[index] = k;

    // call recursively with
    // reduced number
    findCombinationsUtil(arr, index + 1, num, reducedNum - k);
  }
}

/* Function to find out all
combinations of positive
numbers that add upto given
number. It uses findCombinationsUtil() */
function findCombinations(n) {
  // array to store the combinations
  // It can contain max n elements
  let arr = [];

  // find all combinations
  findCombinationsUtil(arr, 0, n, n);
}

// Driver Code

let n = 5;
findCombinations(n);
