// const isCyclic = (graph, visited, index) => {
//   if (visited[index] == 2) return true;
//   visited[index] = 2;
//   const neighbours = graph.get(index) || [];
//   for (let n of neighbours) {
//     if (visited[n] != 1) {
//       if (isCyclic(graph, visited, n)) return true;
//     }
//   }
//   visited[index] = 1;
//   return false;
// };
// /**
//  * @param {number} numCourses
//  * @param {number[][]} prerequisites
//  * @return {boolean}
//  */
// var canFinish = function (numCourses, prerequisites) {
//   // 0 unvisited
//   // 1 processed
//   // 2 processing
//   const graph = new Map();
//   const visited = new Array(numCourses).fill(0);
//   for (let [course, dependency] of prerequisites)
//     graph.set(course, (graph.get(course) || new Set()).add(dependency));

//   for (let i = 0; i < numCourses; i++) {
//     if (visited[i] == 0) {
//       if (isCyclic(graph, visited, i)) {
//         return false;
//       }
//     }
//   }

//   return true;
// };

// not working
var canFinish = function (numCourses, prerequisites) {
  let graph = new Map();
  let visited = new Array(numCourses).fill(0);
  for (let [course, dependency] of prerequisites) {
    graph.set(course, (graph.get(course) || new Set()).add(dependency));
  }

  for (let i = 0; i < numCourse; i++) {
    // for each course run dfs to check for cycles
    if (visited[i] !== 0) {
      isCyslic(graph, visited, i);
    }
  }
  return true;
};
var isCyclic = function (graph, visited, index) {
  if (visited[2] == 0) return true;
  visited[index] = 2;
  const neighbours = graph.get(index);
  for (n of neighbours) {
    if (visited[n] !== 1) {
      if (isCyclic(graph, visited, n)) return true;
    }
  }
  visited[index] = 1;
  return false;
};
