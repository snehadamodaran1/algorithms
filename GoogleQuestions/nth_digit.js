// Given an integer n, return the nth digit of the infinite integer sequence [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...].

// Example 1:

// Input: n = 3
// Output: 3
// Example 2:

// Input: n = 11
// Output: 0
// Explanation: The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.

// 1 - 9  1 digit => (9 - 1 + 1)*1 = 9 digits
// 10 - 99 2digits => (99 - 10 + 1)*2 = 180 digits
// 100 - 999  3digits => (999-100+1)*3 = 2700 digits

const findNthDigit = (n) => {
  let len = (cur = 1); // len: length of 0 ~ 9, 10 ~ 99, 100 ~ 999 ...   cur: final number
  let cnt = 9; // // how many numbers between 0 ~ 9, 10 ~ 99, 100 ~ 999 ...
  while (n > len * cnt) {
    n = n - len * cnt;
    console.log(n, len, len * cnt);
    len++;
    cnt = cnt * 10;
    cur = cur * 10;
  }
  console.log("cur", cur, cnt, ((n - 1) / len) >> 0, len);

  cur += (n - 1) / len; //>> 0;
  let s = cur + "";
  let idx = (n - 1) % len;
  return s[idx];
};

// var findNthDigit = function (n) {
//   let base = 1;
//   let preCount = 0;
//   let count = 0;

//   while (count < n) {
//     preCount = count;
//     count += base * 9 * Math.pow(10, base - 1);
//     base++;
//   }

//   let left = n - preCount;
//   let num = Math.pow(10, base - 2) + Math.ceil(left / (base - 1)) - 1;
//   let pos = (left % (base - 1)) - 1;
//   num = "" + num;
//   if (pos < 0) {
//     pos = num.length - 1;
//   }
//   return num[pos];
// };

console.log(findNthDigit(198));
