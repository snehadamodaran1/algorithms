var kSmallestPairs = function (nums1, nums2, k) {
  let arr = [];
  let finArr = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      arr.push(Array(nums1[i], nums2[j]));
    }
  }
  arr.sort((a, b) => {
    return a[0] + a[1] - (b[0] + b[1]);
  });
  for (let i = 0; i < k; i++) {
    if (i === arr.length) {
      break;
    }
    finArr.push(arr[i]);
  }
  return finArr;
};
