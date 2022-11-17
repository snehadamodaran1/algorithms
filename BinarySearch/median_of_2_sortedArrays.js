var findMedianSortedArrays = function (nums1, nums2) {
  let totalLen = nums1.length + nums2.length;
  let idx1 = 0;
  let idx2 = 0;
  let curr;
  let last;

  while (idx1 + idx2 <= totalLen / 2) {
    if (curr) {
      last = curr;
    }
    let elOne = nums1[idx1];
    let elTwo = nums2[idx2];
    if (elOne === undefined) {
      curr = elTwo;
      idx2++;
    } else if (elTwo === undefined) {
      curr = elOne;
      idx1++;
    } else if (elOne < elTwo) {
      curr = elOne;
      idx1++;
    } else {
      curr = elTwo;
      idx2++;
    }
  }
  return totalLen % 2 === 0 ? (last + curr) / 2 : curr;
};

// var findMedianSortedArrays = function(nums1, nums2) {
//     const mergedArr = [].concat(nums1, nums2);
//     const mid = Math.floor(mergedArr.length/2);
//     mergedArr.sort(function(a,b){return a-b;});
//     return (mergedArr.length % 2 !== 0) ? mergedArr[mid] : (mergedArr[mid-1] + mergedArr[mid])/2;
// };
