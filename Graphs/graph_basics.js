class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.adjList = new Map();
  }

  addVertex(v) {
    this.adjList.set(v, []);
  }
  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }
  
}
