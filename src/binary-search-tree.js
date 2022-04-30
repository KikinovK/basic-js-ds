const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {


  constructor() {
    this.first = null
  }

  root() {
    return this.first
  }

  add(data) {
    function addNode(node, data) {
      if (!node) {
        return new Node(data)
      }
      if (node.data === data) {
        return node
      }
      if (node.data > data) {
        node.left = addNode(node.left, data)
      } else {
        node.right = addNode(node.right, data)
      }
      return node;
    }

    this.first = addNode(this.first, data)
  }

  has(data) {
    function hasNode(node, data) {
      if (!node) {
        return false
      }
      if (node.data === data) {
        return true
      }
      if (node.data > data) {
       return hasNode(node.left, data)
      } else {
       return hasNode(node.right, data)
      }
    }
    return hasNode(this.first, data)
  }

  find(data) {
    function findNode(node, data) {
      if (!node) {
        return null
      }
      if (node.data === data) {
        return node
      }
      if (node.data > data) {
        return findNode(node.left, data)
      } else {
        return findNode(node.right, data)
      }
    }
    return findNode(this.first, data)
  }

  remove(data) {

    this.first = removeNode(this.first, data);

    function removeNode(node, data) {
      if (!node) {
        return null
      }
      if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node
      } else if (node.data === data) {
        if (!node.left && !node.right) {
          return null
        }
        if (!node.left) {
          node = node.right;
          return node
        }
        if (!node.right) {
          node = node.left;
          return node
        }

        let branchRight = node.right;
        while(branchRight.left) {
          branchRight = branchRight.left
        }
        node.data = branchRight.data;
        node.right = removeNode(node.right, branchRight.data);

        return node
      }
    }
  }

  min() {
    function goLeft(node) {
      if(node.left === null){
        return node
      } else {
        return goLeft(node.left)
      }
    }
    return this.first ? goLeft(this.first).data : this.first
  }

  max() {
    function goRight(node) {
      if(node.right === null){
        return node
      } else {
        return goRight(node.right)
      }
    }
    return this.first ? goRight(this.first).data : this.first
  }
}

module.exports = {
  BinarySearchTree
};
