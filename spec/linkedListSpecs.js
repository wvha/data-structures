describe('linked list', function() {

  beforeEach(function() {
    linkedList = new LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods including \'addToTail\', \'removeHead\', and \'contains\'', function() {
    expect(linkedList.addToTail).to.be.a.('function');
    expect(linkedList.removeHead).to.be.a.('function');
    expect(linkedList.contains).to.be.a.('function');
  });

  it('should assign new tail when new nodes are added', function() {
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    expect(linkedList.tail).to.equal('b');
  });

  it('should remove head from the list when removeHead is called', function() {
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    linkedList.removeHead();
    expect(linekdList.head).to.equal('b');
  });

  it('should contain a value that was added', function() {
    linkedList.addToTail('a');
    expect(linkedList.contains('a')).to.equal(true);
  });

  it('should not contain a value that was removed', function() {
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    linkedList.removeHead();
    expect(linkedList.contains('a')).to.equal(false);
  });

});