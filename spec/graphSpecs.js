describe('graph', function() {
  let graph;

  beforeEach(function() {
    graph = new Graph();
  });

  it('should have methods named "addNode", "contains", "removeNode", "addEdge", "hasEdge", "removeEdge", and "forEachNode"', function() {
    expect(graph.addNode).to.be.a('function');
    expect(graph.contains).to.be.a('function');
    expect(graph.removeNode).to.be.a('function');
    expect(graph.addEdge).to.be.a('function');
    expect(graph.hasEdge).to.be.a('function');
    expect(graph.removeEdge).to.be.a('function');
    expect(graph.forEachNode).to.be.a('function');
  });

  it('should add and remove nodes', function() {
    graph.addNode(5);
    expect(graph.contains(5)).to.equal(true);
    graph.removeNode(5);
    expect(graph.contains(5)).to.equal(false);
  });

  it('should add and remove edges between nodes', function() {
    graph.addNode(5);
    graph.addNode(6);
    graph.addNode(7);
    graph.addEdge(5, 6);
    expect(graph.hasEdge(5, 6)).to.equal(true);
    graph.removeEdge(5, 6);
    expect(graph.hasEdge(5, 6)).to.equal(false);
  });

  it('should do callback on each node in graph', function() {
    let addEdgeToFour = function(node) {
      graph.addEdge(node, 4);
    };
    graph.addNode(5);
    graph.addNode(6);
    graph.addNode(4);
    graph.forEachNode(addEdgeToFour);
    expect(graph.hasEdge(4, 5)).to.equal(true);
    expect(graph.hasEdge(4, 6)).to.equal(true);
  });

})