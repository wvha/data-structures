describe('stack', function() {

  beforeEach(function() {
    stack = new Stack();
  });

  it('should have size of zero for new stack', function() {
    expect(stack.size().to.equal(0);
  });

  it('should have a size of 2 after adding two items', function() {
    stack.stack('a');
    stack.stack('b');
    expect(stack.size().to.equal(2);
  });

  it('should remove the newest item in the list', function() {
    stack.stack('a');
    stack.stack('b');
    expect(stack.unstack().to.equal('b');
  })

})