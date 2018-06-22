describe('stack', function() {

  beforeEach(function() {
    stack = new Stack();
  });

  it('should have size of zero for new stack', function() {
    expect(stack.size()).to.equal(0);
  });

  it('should have a size of 2 after adding two items', function() {
    stack.push('a');
    stack.push('b');
    expect(stack.size()).to.equal(2);
  });

  it('should have a size of 1 after adding two and removing one item', function() {
    stack.push('a');
    stack.push('b');
    stack.pop();
    expect(stack.size()).to.equal(1);
  });

  it('should remove the newest item in the list', function() {
    stack.push('a');
    stack.push('b');
    expect(stack.pop()).to.equal('b');
  });

});
