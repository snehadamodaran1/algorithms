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
