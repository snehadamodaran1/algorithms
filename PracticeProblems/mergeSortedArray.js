var merge = function (nums1, m, nums2, n) {
  let i = 0,
    j = 0,
    pos = 0;
  while (i < nums1.length) {
    while (nums1[j] >= nums2[j]) {
      nums1.splice(j - 1, 0, nums2[j]);
      j++;
    }
    i++;
  }
  return nums1;
};
let nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
console.log(merge(nums1, m, nums2, n));
