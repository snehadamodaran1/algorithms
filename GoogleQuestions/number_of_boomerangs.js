// You are given n points in the plane that are all distinct, where points[i] = [xi, yi]. A boomerang is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).

// Return the number of boomerangs.

// Example 1:

// Input: points = [[0,0],[1,0],[2,0]]
// Output: 2
// Explanation: The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]].
// Example 2:

// Input: points = [[1,1],[2,2],[3,3]]
// Output: 2
// Example 3:

// Input: points = [[1,1]]
// Output: 0

var numberOfBoomerangs = function (points) {
  const POINTS_LEN = points.length;
  let result = 0;

  for (let i = 0; i < POINTS_LEN; i++) {
    const hash = new Map();

    for (let j = 0; j < POINTS_LEN; j++) {
      if (i === j) continue;
      const [x1, y1] = points[i];
      const [x2, y2] = points[j];
      const dis = Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
      const value = hash.get(dis) ?? 0;

      if (value > 0) result += value * 2;
      hash.set(dis, value + 1);
    }
  }

  return result;
};
