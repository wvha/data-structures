describe('queue', function() {

  beforeEach(function() {
    queue = new Queue();
  });

  it('should have size of zero for a new queue', function() {
    expect(queue.size()).to.equal(0);
  });

  it('should have a size of 2 after adding two items', function() {
    queue.upqueue('a');
    queue.upqueue('b');
    expect(queue.size()).to.equal(2);
  });

  it('should have size of 0 after removing more items vs added', function() {
    queue.upqueue('a');
    queue.dequeue();
    queue.dequeue();
    expect(queue.size()).to.equal(0);
  });

  it('should remove the oldest item in the list', function() {
    queue.upqueue('a');
    queue.upqueue('b');
    expect(queue.dequeue()).to.equal('a');
  });

})