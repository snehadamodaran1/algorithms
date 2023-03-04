function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let last = [null, -1];
  let result = [];

  for (const [start, end] of intervals) {
    if (start > last[1]) {
      last = [start, end];
      result.push(last);
    } else {
      last[1] = Math.max(last[1], end);
    }
  }

  return result;
}

//--------------------------------------------------------------------------------------------------------
var merge = function (intervals) {
  if (!intervals.length) return intervals;
  intervals.sort((a, b) => a.start - b.start);
  var prev = intervals[0];
  var res = [prev];
  for (var cur of intervals) {
    if (cur.start <= prev.end) {
      prev.end = Math.max(prev.start, cur.end);
    } else {
      res.push(cur);
      prev = cur;
    }
  }
  return res;
};

//--------------------------------------------------------------------------------------------------------
class Pair {
  constructor(first, second) {
    this.first = first;
    this.second = second;
  }
}

let mergeIntervals = function (v) {
  let result = [];
  result.push(new Pair(v[0].first, v[0].second));
  //write your code here
  for (let i = 1; i < v.length; i++) {
    if (result[result.length - 1].second >= v[i].first) {
      result[result.length - 1].second = v[i].second;
    } else {
      result.push(new Pair(v[i].first, v[i].second));
    }
  }
  return result;
};
let v = [
  new Pair(1, 5),
  new Pair(3, 7),
  new Pair(4, 6),
  new Pair(6, 8),
  new Pair(10, 12),
  new Pair(11, 15),
];

let result = mergeIntervals(v);

let result_str = "";
for (let i = 0; i < result.length; i++) {
  result_str =
    result_str + "[" + result[i].first + ", " + result[i].second + "] ";
}
console.log(result_str);
