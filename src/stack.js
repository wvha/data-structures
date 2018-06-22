const Stack = function() {
  this.storage = {};
}

Stack.prototype.push = function(value) {
  this.storage[this.size()] = value;
}

Stack.prototype.pop = function() {
  let holder = this.storage[this.size()-1];
  delete this.storage[this.size()-1];
  return holder;
}

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
}

let stackInstance = new Stack;