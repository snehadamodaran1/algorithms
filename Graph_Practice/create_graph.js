class Graph {
  constructor() {
    this.graph = new Map();
  }
  addVertex(v) {
    this.graph.set(v, []);
  }
  addEdge(v, w) {
    this.graph.get(v).push(w);
    this.graph.get(w).push(v);
  }
  display() {
    console.log(this.graph);
  }
  dfs(start, visited = new Set()) {
    // make sure to make visited a SET
    visited.add(start);
    console.log(start);
    let adjs = this.graph.get(start);
    for (let adj of adjs) {
      if (!visited.has(adj)) {
        this.dfs(adj, visited);
      }
    }
  }
  bfs(start) {
    let queue = [start];

    let visited = new Set();
    visited.add(start);

    while (queue.length > 0) {
      let v = queue.pop();
      console.log(v);
      let adjs = this.graph.get(v);
      for (let adj of adjs) {
        if (!visited.has(adj)) {
          visited.add(adj);
          queue.push(adj);
        }
      }
    }
  }
  clone(graph, newGraph, start) {
    let queue = [start];

    let visited = new Set();
    visited.add(start);
    newGraph.addVertex(start);
    newGraph.get(start).set(start, []);
    while (queue.length > 0) {
      let v = queue.pop();
      console.log(v);
      let adjs = this.graph.get(v);
      for (let adj of adjs) {
        if (!visited.has(adj)) {
          visited.add(adj);
          queue.push(adj);
        }
      }
    }
  }
}

let g = new Graph();
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

// g.display();

// console.log("DFS - ", g.dfs("A"));
// console.log("BFS - ", g.bfs("A"));

let newG = new Graph();
console.log("Cloned new Graph - ", g.clone(g, newG));
