// var repeatedSubstringPattern = function (s) {
//   if (s.length === 0 || s.length === 1) return false;
//   for (let i = 1; i <= s.length / 2; i++) {
//     if (s.length % i === 0 && s.slice(0, i).repeat(s.length / i) === s) {
//       return true;
//     }
//   }
//   return false;
// };

var repeatedSubstringPattern = function (s) {
  if (s.length === 0 || s.length === 1) return false;
  for (i = 0; i < s.length / 2; i++) {
    if (s.slice(0, i).repeat(s.length / i) === s && s.length % i === 0) {
      return true;
    }
  }
  return false;
};
