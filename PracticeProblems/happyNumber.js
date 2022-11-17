// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.
function findSquareSum(n) {
  let num = 0,
    sum = 0;
  while (n > 0) {
    num = n % 10;
    console.log("num", num);
    sum = sum + num * num;
    n = parseInt(n / 10);
  }
  return sum;
}
var isHappy = function (n) {
  let sum,
    seen = new Set();
  while (sum != 1) {
    sum = findSquareSum(n);
    seen.add(n);
    n = sum;
    console.log("sum", sum);
    if (sum == 1) return true;
    console.log("seen", seen);
    if (seen.has(n)) return false;
  }
  return true;
};
console.log("is Happy number", isHappy(541));
