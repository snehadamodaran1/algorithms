// // Javascript | Cycle Detection | DFS | O(V+E)
// function dfs(adjList, visited, node, prev) {
//   if (visited.has(node)) return false; // loop detected
//   visited.add(node);
//   const adj = adjList[node];
//   for (let i = 0; i < adj.length; i++) {
//     if (adj[i] === prev) continue; // If previous node is getting revisited don't run dfs
//     if (!dfs(adjList, visited, adj[i], node)) return false;
//   }

//   return true;
// }

// // create an adjacency list and visited array - loop through edges and keep pushing into adjlist then call dfs
// // call dfs for checking if there are loops
// var validTree = function (n, edges) {
//   const adjList = new Array(n).fill(0).map(() => new Array());
//   console.log(adjList);
//   const visited = new Set();

//   for (let i = 0; i < edges.length; i++) {
//     const [ai, bi] = edges[i];
//     adjList[ai].push(bi);
//     adjList[bi].push(ai);
//   }
//   if (!dfs(adjList, visited, 0, -1)) return false;
//   return visited.size === n;
// };

var dfs = function (adjList, visited, node, prev) {
  // in dfs go through visited
  if (visited.has(node)) return false; // loop detected
  visited.add(node);
  const adj = adjList[node];
  for (let i = 0; i < adj.length; i++) {
    if (adj[i] === prev) continue;
    if (!dfs(adjList, visited, adj[i], node)) return false; // traverse through all nodes, if all nodes traveds return trie
  }
  return true;
};
var validTree = function (n, edges) {
  let adjList = new Array(n).fill(0).map(() => new Array());
  let visited = new Set(); // node has to be a set
  for (let i = 0; i < edges.length; i++) {
    const [ai, bi] = edges[i];
    adjList[ai].push(bi);
    adjList[bi].push(ai);
  }
  if (!dfs(adjList, visited, 0, -1)) return false;
  console.log(adjList);
  return visited.size === n; // all nodes visited
};
console.log(
  validTree(5, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
  ])
);
