/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
  //next permutation
  let start = 0,
    end = n.length - 1;
  let digits = n.split("");
  while (end > start) {
    if (n[end - 1] < n[end]) end++;
    let max = Math.max(n);
  }
  console.log(digits);
};
n = "132";
console.log(nextGreaterElement(n));
