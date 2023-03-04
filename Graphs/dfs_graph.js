class Graph {
  constructor() {
    this.vertices = [];
    this.adjacent = {};
    this.edges = 0;
  }

  addVertex(v) {
    this.vertices.push(v);
    this.adjacent[v] = [];
  }

  addEdge(v, w) {
    this.adjacent[v].push(w);
    this.adjacent[w].push(v);
    this.edges++;
  }
}

const g = new Graph();

// undirected graph
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addVertex("G");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("A", "D");
g.addEdge("B", "C");
g.addEdge("B", "D");
g.addEdge("C", "D");
g.addEdge("C", "E");
g.addEdge("D", "F");
g.addEdge("F", "G");

// console.log(g);

function dfs(goal, discovered = [], v = this.vertices) {
  let adj = this.adjacent;
  discovered[v] = true;
  console.log(adj);
  //   for (let i = 0; i < adj[v].length; i++) {}
}

dfs(g);

// function dfs(graph, node, visited = []) {
//   if (!visited.includes(node)) {
//     visited.push(node);
//     // graph[node].forEach((neighbour) => {
//     //   dfs(graph, neighbour, visited);
//     // });
//     for (let i = 0; i < graph[node].length; i++) {
//       dfs(graph, graph[node][i], visited);
//     }
//   }
//   return visited;
// }

// // Example usage:

// const graph = {
//   A: ["B", "C"],
//   B: ["A", "D", "E"],
//   C: ["A", "F"],
//   D: ["B"],
//   E: ["B", "F"],
//   F: ["C", "E"],
// };

// const visited = dfs(graph, "A");
// console.log(visited);

class Graph {
  constructor() {
    this.vertices = [];
    this.adjacent = [];
    this.edges = 0;
  }
  addVertex(v) {
    this.vertices.push(v);
    this.adjacent[v] = [];
  }
  addEdge(v, w) {
    this.adjacent[v].push(w);
    this.adjacent[w].push(v);
    this.edges++;
  }
  display() {
    console.log("The graph : ", this.adjacent);
  }
  // dfs(goal, v = this.vertices[0], discovered = []) {
  //   let adj = this.adjacent;

  //   discovered[v] = true;
  //   console.log(v);

  //   for (let i = 0; i < adj[v].length; i++) {
  //     let w = adj[v][i];

  //     if (!discovered[w]) {
  //       this.dfs(goal, w, discovered);
  //     }
  //   }

  //   return discovered[goal] || false;
  // }

  dfs(goal, v = this.vertices[0], visited = []) {
    visited[v] = true;
    let adj = this.adjacent;

    for (let i = 0; i < adj[v].length; i++) {
      // rememeber to take length of adjacent v's length
      let w = adj[v][i];

      if (!visited[w]) {
        this.dfs(goal, w, visited);
      }
    }

    return visited[goal] || false;
  }

  bfs(goal, start = this.vertices[0]) {
    let adj = this.adjacent;

    const queue = [];
    queue.push(start);

    const discovered = [];
    discovered[start] = true;

    const edges = [];
    edges[start] = 0;

    while (queue.length > 0) {
      let v = queue.shift();
      if (v === goal) {
        console.log(edges[goal]);
      }
      for (let i = 0; i < adj[v].length; i++) {
        if (!discovered[adj[v][i]]) {
          discovered[adj[v][i]] = true;
          queue.push(adj[v][i]);
          edges[adj[v][i]] = edges[v] + 1;
        }
      }
    }
    return false;
  }
}
