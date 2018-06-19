const Queue = function() {
  this.storage = {};
  this.upqueueCount = 0;
  this.dequeueCount = 0;
};

Queue.prototype.upqueue = function(value) {
  this.storage[this.upqueueCount] = value;
  this.upqueueCount++;
}

Queue.prototype.dequeue = function() {
  let temp = this.storage[this.dequeueCount];
  delete this.storage[this.dequeueCount];
  this.dequeueCount++;
  return temp;
}

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
}

let queueInstance = new Queue;