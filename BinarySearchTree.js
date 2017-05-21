function BinarySearchTree() {
  const Node = (key) => {
    this.key = key;
    this.left = null;
    this.right = null;
  };
  let root = null;
  const insertNode = (node, newNode) => {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  };
  this.insert = (key) => {
    const newNode = new Node(key);
    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };
  this.getRoot = () => root;

  const searchNode = (node, key) => {
    if (node === null) {
      return false;
    }
    if (key < node.key) {
      return searchNode(node.left, key);
    } else if (key > node.key) {
      return searchNode(node.right, key);
    }
    return true;
  };
  this.search = key => searchNode(root, key);
  const inOrderTraverseNode = (node, callback) => {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback);
      callback(node.key);
      inOrderTraverseNode(node.right, callback);
    }
  };
  this.inOrderTraverse = callback => inOrderTraverseNode(root, callback);

  const preOrderTraverseNode = (node, callback) => {
    if (node !== null) {
      callback(node.key);
      preOrderTraverseNode(node.left, callback);
      preOrderTraverseNode(node.right, callback);
    }
  };
  this.preOrderTraverse = callback => preOrderTraverseNode(root, callback);

  const postOrderTraverseNode = (node, callback) => {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback);
      postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  };
  this.postOrderTraverse = callback => postOrderTraverseNode(root, callback);

  const minNode = (node) => {
    if (node) {
      while (node && node.left !== null) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  };
  this.min = () => minNode(root);

  const maxNode = (node) => {
    if (node) {
      while (node && node.right !== null) {
        node = node.right;
      }
      return node.key;
    }
    return null;
  };
  this.max = () => maxNode(root);

  const findMinNode = (node) => {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  };
  const removeNode = (node, element) => {
    if (node === null) {
      return null;
    }
    if (element < node.key) {
      node.left = removeNode(node.left, element);
      return node;
    } else if (element > node.key) {
      node.right = removeNode(node.right, element);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      const aux = findMinNode(node.right);
      node.key = aux.key;
      node.right = removeNode(node.right, aux.key);
      return node;
    }
  };
  this.remove = (element) => {
    root = removeNode(root, element);
  };
}
