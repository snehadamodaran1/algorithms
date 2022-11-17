// You're given an Array of 2N +ve integers and N operations. In each operation, you can select any two +ve integers from the array

// Your score in each round will be gcd(num1, num2) * operation number, where num1 and num2 are the selected numbers and operation number is the current operation. Your total score will be the sum of all the scores.
// Your goal is to maximize the above total score and return the maximum total score

// N (No of operations) -> 1 <= N <= 10

// 1 <= num <= 10^9

// Example:
// N = 2, Arr = [3,4,9,5]
// Max score is 1 * gcd(4,5) + 2 * gcd(3, 9) = 7

var maxScore = function (nums) {
  function gcd(a, b) {
    if (!b) return a;
    return gcd(b, a % b);
  }

  const memo = new Map();

  function recurse(arr, num1, op) {
    if (!arr.length) return 0;

    const key = arr.join() + num1;
    if (memo.has(key)) return memo.get(key);

    let max = 0;

    for (let i = 0; i < arr.length; i++) {
      const nextArr = [...arr.slice(0, i), ...arr.slice(i + 1)];

      if (num1) {
        const currGCD = gcd(num1, arr[i]);
        const rest = recurse(nextArr, null, op + 1);
        max = Math.max(max, op * currGCD + rest);
      } else {
        const rest = recurse(nextArr, arr[i], op);
        max = Math.max(max, rest);
      }
    }
    memo.set(key, max);
    return max;
  }
  return recurse(nums, null, 1);
};
