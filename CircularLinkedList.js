let CircularLinkedList2 = (() => {
  class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
    }
    }

  const length = new WeakMap();
  const head = new WeakMap();

  class CircularLinkedList2 {
    constructor() {
      length.set(this, 0);
      head.set(this, null);
    }

    append(element) {
      const node = new Node(element);
      let current;

      if (this.getHead() === null) {
        head.set(this, node);
      } else {
        current = this.getHead();
        while (current.next !== this.getHead()) {
          current = current.next;
        }
        current.next = node;
      }
      node.next = this.getHead();

      let l = this.size();
      l += 1;
      length.set(this, l);
    }

    insert(position, element) {
      if (position >= 0 && position <= this.size()) {
        const node = new Node(element);
        let current = this.getHead();
        let previous;
        let index = 0;

        if (position === 0) {
          node.next = current;
          while (current.next !== this.getHead()) {
            current = current.next;
          }
          head.set(this, node);
          current.next = this.getHead();
        } else {
          while (index++ < position) {
            previous = current;
            current = current.next;
          }
          node.next = current;
          previous.next = node;
        }
        let l = this.size();
        l += 1;
        length.set(this, l);
        return true;
      }
      return false;
    }

    removeAt(position) {
      if (position > -1 && position < this.size()) {
        let current = this.getHead();
        let previous;
        let index = 0;
        if (position === 0) {
          while (current.next !== this.getHead()) {
            current = current.next;
          }

          head.set(this, this.getHead().next);
          current.next = this.getHead();
        } else {
          while (index++ < position) {
            previous = current;
            current = current.next;
          }
          previous.next = current.next;
        }

        let l = this.size();
        l -= 1;
        length.set(this, l);

        return current.element;
      }
      return null;
    }

    indexOf(element) {
      let current = this.getHead();
      let index = -1;
      if (element === current.element) {
        return 0;
      }

      index += 1;
      while (current.next !== this.getHead()) {
        if (element === current.element) {
          return index;
        }
        current = current.next;
        index += 1;
      }

      if (element === current.element) {
        return index;
      }
      return -1;
    }

    remove(element) {
      const index = indexOf(element);
      return removeAt(index);
    }

    isEmpty() {
      return this.size() === 0;
    }

    size() {
      return length.get(this);
    }

    getHead() {
      return head.get(this);
    }

    toString() {
      let current = this.getHead();
      let s = current.element;
      while (current.next !== this.getHead()) {
        current = current.next;
        s += `, ${current.element}`;
      }
      return s.toString();
    }

    print() {
      console.log(this.toString());
    }
    }
  return CircularLinkedList2;
})();
