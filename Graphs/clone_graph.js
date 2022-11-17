// var cloneGraph = function(node, visited = new Map()) {
//     if(!node) return;
//     if(visited.has(node)) return visited.get(node);
//     const clone = new Node(node.val, []);
//     visited.set(node, clone);
//     for(const neighbor of node.neighbors) clone.neighbors.push(cloneGraph(neighbor, visited));
//     return clone;
// };

var cloneGraph = function (node, visited = new Map()) {
  // M is caps
  if (!node) return node;
  if (visited.has(node)) return visited.get(node);
  const clone = new Node(node.val, []);
  visited.set(node, clone);
  for (let nei of node.neighbours)
    clone.neighbors.push(cloneGraph(neighbour, visited));

  return clone; // dont forget to return the clone
};
