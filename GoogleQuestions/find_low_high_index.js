let findHighLowIndex = function (arr, data) {
  let left = 0;
  let right = arr.length - 1;
  let fi = -1; // First index = fi

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (data > arr[mid]) {
      left = mid + 1;
    } else if (data < arr[mid]) {
      right = mid - 1;
    } else {
      fi = mid;
      right = mid - 1;
    }
  }

  left = 0;
  right = arr.length - 1;
  let li = -1; // last index = li
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (data > arr[mid]) {
      left = mid + 1;
    } else if (data < arr[mid]) {
      right = mid - 1;
    } else {
      li = mid;
      left = mid + 1;
    }
  }
  console.log(li, fi);
  return -1;
};

let array = [
  1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6,
];

var key = 5;
console.log("Low Index of " + key + ": " + findHighLowIndex(array, key));
console.log("High Index of " + key + ": " + findHighLowIndex(array, key));

key = -2;
console.log("Low Index of " + key + ": " + findHighLowIndex(array, key));
console.log("High Index of " + key + ": " + findHighLowIndex(array, key));
