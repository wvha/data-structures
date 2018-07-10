describe('tree', function() {

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods "addChild", "contains", and "traverse"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.traverse).to.be.a('function');
  });

  it('should have properties named "value" and "children"', function() {
    expect(tree.hasOwnProperty('value')).to.equal(true);
    expect(tree.hasOwnProperty('children')).to.equal(true);
  })

  it('should add children to tree', function() {
    tree.addChild(3);
    expect(tree.children[0].value).to.equal(3);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(3);
    tree.children[0].addChild(4);
    expect(tree.children[0].children[0].value).to.equal(4);
  })

  it('should return true for value contained in tree and nested children', function() {
    tree.addChild(3);
    tree.children[0].addChild(4);
    expect(tree.contains(4)).to.equal(true);
  });

});
