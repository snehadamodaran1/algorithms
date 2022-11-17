// go through every edge and call uninon function
// in union function, we check if parent of a is not equa to parent b
//  we call isrootparetn function - keep passing through till we find the root

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
  const parent = new Array(n).fill(0).map((x, index) => index);
  console.log(parent);

  const findRootParent = (a) => {
    // find parent root
    while (a !== parent[a]) {
      parent[a] = parent[parent[a]]; // grandparent
      a = parent[a];
    }
    return a;
  };

  let size = n;
  const union = (a, b) => {
    const rootA = findRootParent(a);
    const rootB = findRootParent(b);
    if (rootA !== rootB) {
      size -= 1;
      parent[rootA] = rootB;
    }
  };

  edges.forEach(([a, b]) => {
    union(a, b);
  });

  return size;
};

console.log(
  countComponents(5, [
    [0, 1],
    [1, 2],
    [3, 4],
  ])
);
