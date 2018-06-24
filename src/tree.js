const Tree = function(value) {
  let newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);

  return newTree;
}

const treeMethods = {};

treeMethods.addChild = function(value) {
  let child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (let i = 0; i < this.children.length; i++) {
    let child = this.children[i];
    if (child.contains(target)) {
      return true;
    }
  }
  return false;
}

treeMethods.traverse = function(callback) {
  cb(this.value);

  if(!this.children) { return; }
  for (let i = 0; i < this.children.length; i++) {
    let child = this.children[i];
    child.traverse(callback);
  }
};

// helper function from underscore
const extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }

