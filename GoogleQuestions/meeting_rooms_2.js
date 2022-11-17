var solve = function (intervals) {
  var start = intervals.sort((a, b) => a[0] - b[0]);
  var end = [...intervals].sort((a, b) => a[1] - b[1]);
  console.log(start);
  console.log(end);
  let rooms = 0;
  let j = 0;
  for (let i = 0; i < intervals.length; i++) {
    console.log(start[i][0], end[j][1]);
    if (start[i][0] < end[j][1]) {
      rooms++;
    } else {
      console.log(j);
      j++;
    }
  }
  return rooms;
};

let intervals = [
  [0, 30],
  [5, 10],
  [15, 20],
];
console.log(solve(intervals));
