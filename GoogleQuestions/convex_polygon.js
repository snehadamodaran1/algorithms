const arr = [
  [0, 0],
  [0, 1],
  [1, 1],
  [1, 0],
];
const isConvex = (arr = []) => {
  const { length } = arr;
  let pre = 0,
    curr = 0;
  for (let i = 0; i < length; ++i) {
    let dx1 = arr[(i + 1) % length][0] - arr[i][0];
    let dx2 = arr[(i + 2) % length][0] - arr[(i + 1) % length][0];
    let dy1 = arr[(i + 1) % length][1] - arr[i][1];
    let dy2 = arr[(i + 2) % length][1] - arr[(i + 1) % length][1];
    curr = dx1 * dy2 - dx2 * dy1;
    if (curr != 0) {
      if ((curr > 0 && pre < 0) || (curr < 0 && pre > 0)) return false;
      else pre = curr;
    }
  }
  return true;
};
console.log(isConvex(arr));

// (a0,b0) (a1,b1) => dx1 -> (a2-a1), dx2 -> (a2-a1),
//                    dy1 -> (b2-b1), dy2 -> (b2-b1),

//                    dx1*dy2 - dx2*dy1
