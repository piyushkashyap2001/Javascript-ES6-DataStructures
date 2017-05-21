function RedBlackTree() {
  const Colors = {
    RED: 0,
    BLACK: 1,
  };

  const Node = (key, color) => {
    this.key = key;
    this.left = null;
    this.right = null;
    this.color = color;

    this.flipColor = () => {
      if (this.color === Colors.RED) {
        this.color = Colors.BLACK;
      } else {
        this.color = Colors.RED;
      }
    };
  };

  let root = null;
  this.getRoot = () => root;

  const isRed = (node) => {
    if (!node) {
      return false;
    }
    return node.color === Colors.RED;
  };

  const flipColors = (node) => {
    node.left.flipColor();
    node.right.flipColor();
  };

  const rotateLeft = (node) => {
    const temp = node.right;
    if (temp !== null) {
      node.right = temp.left;
      temp.left = node;
      temp.color = node.color;
      node.color = Colors.RED;
    }
    return temp;
  };

  const rotateRight = (node) => {
    const temp = node.left;
    if (temp !== null) {
      node.left = temp.right;
      temp.right = node;
      temp.color = node.color;
      node.color = Colors.RED;
    }
    return temp;
  };

  const insertNode = (node, element) => {
    if (node === null) {
      return new Node(element, Colors.RED);
    }
    let newRoot = node;
    if (element < node.key) {
      node.left = insertNode(node.left, element);
    } else if (element > node.key) {
      node.right = insertNode(node.right, element);
    } else {
      node.key = element;
    }
    if (isRed(node.right) && !isRed(node.left)) {
      newRoot = rotateLeft(node);
    }
    if (isRed(node.left) && isRed(node.left.left)) {
      newRoot = rotateRight(node);
    }
    if (isRed(node.left) && isRed(node.right)) {
      flipColors(node);
    }
    return newRoot;
  };

  this.insert = (element) => {
    root = insertNode(root, element);
    root.color = Colors.BLACK;
  };
}
