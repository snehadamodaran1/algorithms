// // solution 1: 92ms  85.77%
// const characterReplacement = (s, k) => {
//     let n = s.length;
//     let res = kocc = 0;
//     let m = new Map();
//     for (let i = 0; i < n; i++) {
//         let update = m.get(s[i]) + 1 || 1;
//         m.set(s[i], update);
//         kocc = Math.max(kocc, update);
//         res - kocc < k ? res++ : m.set(s[i - res], (m.get(s[i - res] || 0) - 1));
//     }
//     return res;
// };

// // Solution 2: 88ms 93.10%
// const AASCII = 'A'.charCodeAt();
// const characterReplacement = (s, k) => {
//     let n = s.length;
//     let count = Array(26).fill(0);
//     let left = kocc = 0;
//     for (let i = 0; i < n; i++) {
//         kocc = Math.max(kocc, ++count[s[i].charCodeAt() - AASCII]);
//         let sn = i - left + 1;
//         if (sn - kocc > k) {
//             count[s[left++].charCodeAt() - AASCII]--;
//         }
//     }
//     return n - left;
// };

var characterReplacement = function (s, k) {
  let l = 0;
  let hash = {};
  for (let r = 0; r < s.length; r++) {
    let rightChar = s[r];
    while (k > 0) {}
  }
};
