// var myPow = function (x, n) {
//   const helper = (x, n) => {
//     if (!x) return 0;
//     if (!n) return 1;
//     const res = helper(x * x, Math.floor(n / 2)); // cause every time x will be updated by squaring it, so n has to be halfed
//     return n % 2 ? x * res : res; // if n is an odd number then we will have to multiply it one more time
//   };

//   const res = helper(x, Math.abs(n));
//   return n >= 0 ? res : 1 / res;
// };

var myPow = function (x, n) {
  var helper = function (x, n) {
    if (!x) return 0;
    if (!n) return 1;
    var res = helper(x * x, Math.floor(n / 2));
    return n % 2 == 0 ? res : res * x;
  };
  const res = helper(x, Math.abs(n));
  return n >= 0 ? res : 1 / res;
};

(x = 2.0), (n = 10);
console.log(myPow(x, n));
