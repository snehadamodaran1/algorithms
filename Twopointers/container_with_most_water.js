// var maxArea = function (height) {
//   let j = 0;
//   let k = height.length - 1;
//   let maxVolume = 0;
//   while (j < k) {
//     let volume = (k - j) * Math.min(height[k], height[j]);
//     maxVolume = Math.max(volume, maxVolume);
//     if (height[j] < height[k]) j += 1;
//     else k -= 1; // cause the last  one could be short
//   }
//   return maxVolume;
// };

// var height = [2, 3, 4, 5, 18, 17, 6];

// console.log(maxArea(height));

var maxArea = function (ht) {
  let left = 0;
  let right = ht.length - 1;
  let maxVol = 0;
  while (left < right) {
    width = right - left;
    height = Math.min(ht[left], ht[right]);
    if (height * width > maxVol) maxVol = height * width;
    if (ht[left] <= ht[right]) left++;
    else right--;
  }
  return maxVol;
};

height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
