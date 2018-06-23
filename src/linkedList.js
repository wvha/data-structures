const LinkedList = function() {
  const list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let nodeInstance = new Node(value);

    if (!this.tail) {
      this.tail = nodeInstance;
    } else {
      this.tail.next = nodeInstance;
      this.tail = nodeInstance;
    }

    if (!this.head) {
      this.head = nodeInstance;
    }
  };

  list.removeHead = function() {
    let holder = this.head.value;
    this.head = this.head.next;
    return holder;
  }

  list.contains = function(target) {
    let current = this.head;
    while (current !== null) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };
  return list;
}

const Node = function(value) {
  let node = {};
  node.value = value;
  node.next = null;

  return node;
}


// let linkedListInstance = new LinkedList;

/*
A linked list could be an object that holds nodes with a value and pointer to the next node



*/