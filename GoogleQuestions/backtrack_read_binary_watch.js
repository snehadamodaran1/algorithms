//brute force
// var readBinaryWatch = function (num) {
//   const times = [];
//   for (let h = 0; h < 12; h++) {
//     for (let m = 0; m < 60; m++) {
//       const hOnes = h ? h.toString(2).match(/1/g).length : 0;
//       const mOnes = m ? m.toString(2).match(/1/g).length : 0;
//       if (hOnes + mOnes === num) {
//         times.push(`${h}:${m < 10 ? `0${m}` : m}`);
//       }
//     }
//   }
//   return times;
// };
// +=====================backtrack+=====================
var readBinaryWatch = function (num) {
  let result = [];
  helper(0, 0, num, 0);
  return result;
  function helper(hr, min, n, idx) {
    //base n -> 0 all sum up
    if (n === 0) {
      if (min < 10) min = `0${min}`; // eg 06 f0r 1:06
      result.push(`${hr}:${min}`);
    } else {
      for (let i = idx; i < 10; i++) {
        //choose
        if (i < 6) {
          // 2 power 6 is 64
          min += Math.pow(2, i);
          if (min >= 60) {
            min -= Math.pow(2, i);
            continue;
          }
        } else {
          hr += Math.pow(2, i - 6);
          if (hr >= 12) {
            hr -= Math.pow(2, i - 6);
            continue;
          }
        }
        //explore
        helper(hr, min, n - 1, i + 1);
        //un-choose
        if (i < 6) min -= Math.pow(2, i);
        else hr -= Math.pow(2, i - 6);
      }
    }
  }
};
console.log(readBinaryWatch(0));
