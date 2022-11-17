var isPowerOfTwo = function (n) {
  if (n === 1) return true;
  var total = 1;
  while (total < n) {
    total = total * 2;
  }
  if (n === total) return true;
  return false;
};

// Method 2
// var isPowerOfTwo = function (n) {
//   return (
//     (n < 0 ? (n + 1) >>> 0 : n >>> 0).toString(2).match(/1/g)?.length === 1
//   );
// };

// Method 3
// var isPowerOfTwo = function (n) {
//   return ~~Math.log2(n) === Math.log2(n);
// };

let n = 16;
console.log(isPowerOfTwo(n));
