var maxArea = function (height) {
  let j = 0;
  let k = height.length - 1;
  let maxVolume = 0;
  while (j < k) {
    let volume = (k - j) * Math.min(height[k], height[j]);
    maxVolume = Math.max(volume, maxVolume);
    if (height[j] < height[k]) j += 1;
    else k -= 1; // cause the last  one could be short
  }
  return maxVolume;
};

var height = [2, 3, 4, 5, 18, 17, 6];

console.log(maxArea(height));
