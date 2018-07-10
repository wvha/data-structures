const Graph = function() {
  this.newGraph = {};
  // newGraph holds all the nodes
}

Graph.prototype.addNode = function(node) {
  this.newGraph[node] = [];
};

Graph.prototype.contains = function(node) {
  return this.newGraph[node] ? true : false;
};

Graph.prototype.removeNode = function(node) {
  // must remove edges connected with node
  if(this.newGraph[node].length > 0) {
    this.removeEdge(this.newGraph[node][0], node);
  }

  delete this.newGraph[node];
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  this.newGraph[fromNode].push(toNode);
  this.newGraph[toNode].push(fromNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  let indexFrom = this.newGraph[fromNode].indexOf(toNode);
  let indexTo = this.newGraph[toNode].indexOf(fromNode);

  this.newGraph[fromNode].splice(indexFrom, 1);
  this.newGraph[toNode].splice(indexTo, 1);
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  if(this.newGraph[fromNode] && this.newGraph[toNode]) {
    return (this.newGraph[fromNode].indexOf(toNode) > -1) && (this.newGraph[toNode].indexOf(fromNode) > -1);
  } else {
    return false;
  }
};

Graph.prototype.forEachNode = function(callback) {
  for (let key in this.newGraph) {
    callback(Number(key));
  }
};
