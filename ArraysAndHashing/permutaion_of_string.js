var checkInclusion = function (s1, s2) {
  let set = new Set();
  for (let i of s1) {
    if (!set.has[i]) set.add(i, 1);
  }
  console.log(set);
  let left = 0,
    right = 0;
  for (let j of s1) {
    if (set.has(j)) {
      right++;
      console.log(left, right, s1.length, right - left);
      if (right - left === s1.length) return true;
    } else {
      left++;
    }
  }
  return false;
};

let s1 = "ab",
  s2 = "eidboaoo";

console.log(checkInclusion(s1, s2));
