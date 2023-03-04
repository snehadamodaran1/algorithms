class Graph {
  constructor() {
    this.adjList = new Map();
  }

  addVertex(v) {
    this.adjList.set(v, []);
  }
  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  display() {
    console.log(this.adjList, this.adjList.size);
  }
}

let graph1 = new Graph();
graph1.addVertex("A");
graph1.addVertex("B");
graph1.addEdge("A", "B");
graph1.display();
