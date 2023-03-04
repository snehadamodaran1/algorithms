/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
    } else {
      map.set(arr[i], map.get(arr[i]) + 1);
    }
  }
  console.log(map);

  let half = arr.length / 2;

  let sorted = [...map].sort((a, b) => b[1] - a[1]);
  console.log(sorted);
  let index = 0;
  let counts = 0;
  let sum = 0;
  while (sum < half) {
    sum += sorted[index++][1];
    counts++;
  }
  return counts;
};

var minSetSize1 = function (arr) {
  const map = new Map();

  for (const num of arr) {
    if (!map.has(num)) map.set(num, 0);
    map.set(num, map.get(num) + 1);
  }

  console.log(map);
  // because javascript doesn't have built-in priority queue data structure, we need to just sort descending based on count to mimic maxHeap
  const countPairs = [...map].sort((a, b) => b[1] - a[1]);

  const target = arr.length / 2; // we know its even, so we don't have to worry about remainders

  let index = 0;
  let counts = 0;
  let sum = 0;

  while (sum < target) {
    sum += countPairs[index++][1];
    counts++;
  }

  return counts;
};

arr = [3, 3, 3, 3, 5, 5, 5, 2, 2, 7];
console.log(minSetSize(arr));
console.log(minSetSize1(arr));
