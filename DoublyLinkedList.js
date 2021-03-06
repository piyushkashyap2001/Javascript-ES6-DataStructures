let DoublyLinkedList2 = (() => {
  class Node {
    constructor(element) {
      this.element = element;
      this.next = null;
      this.prev = null;
    }
    }

  const length = new WeakMap();
  const head = new WeakMap();
  const tail = new WeakMap();

  class DoublyLinkedList2 {
    constructor() {
      length.set(this, 0);
      head.set(this, null);
      tail.set(this, null);
    }

    append(element) {
      const node = new Node(element);
      let _tail;

      if (this.getHead() === null) {
        head.set(this, node);
        tail.set(this, node);
      } else {
        _tail = this.getTail();
        _tail.next = node;
        node.prev = _tail;
        tail.set(this, node);
      }
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
          if (!this.getHead()) {
            head.set(this, node);
            tail.set(this, node);
          } else {
            node.next = current;
            current.prev = node;
            head.set(this, node);
          }
        } else if (position === this.size()) {
          current = tail;
          current.next = node;
          node.prev = current;
          tail.set(this, node);
        } else {
          while (index++ < position) {
            previous = current;
            current = current.next;
          }
          node.next = current;
          previous.next = node;

          current.prev = node;
          node.prev = previous;
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
        let _head = this.getHead();
        let _tail = this.getTail();
        let current = _head;
        let previous;
        let index = 0;
        if (position === 0) {
          _head = current.next;
          if (this.size() === 1) {
            _tail = null;
          } else {
            _head.prev = null;
          }
        } else if (position === this.size() - 1) {
          current = _tail;
          _tail = current.prev;
          _tail.next = null;
        } else {
          while (index++ < position) {
            previous = current;
            current = current.next;
          }
          previous.next = current.next;
          current.next.prev = previous;
        }

        head.set(this, _head);
        tail.set(this, _tail);

        let l = this.size();
        l -= 1;
        length.set(this, l);
        return current.element;
      }
      return null;
    }

    remove(element) {
      const index = this.indexOf(element);
      return this.removeAt(index);
    }

    indexOf(element) {
      let current = this.getHead();
      let index = -1;
      if (element === current.element) {
        return 0;
      }
      index += 1;
      while (current.next) {
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

    isEmpty() {
      return this.size() === 0;
    }

    size() {
      return length.get(this);
    }

    toString() {
      let current = this.getHead();
      let s = current ? current.element : '';

      while (current && current.next) {
        current = current.next;
        s += `, ${current.element}`;
      }

      return s;
    }

    inverseToString() {
      let current = this.getTail();
      let s = current ? current.element : '';

      while (current && current.prev) {
        current = current.prev;
        s += `, ${current.element}`;
      }
      return s;
    }

    print() {
      console.log(this.toString());
    }

    printInverse() {
      console.log(this.inverseToString());
    }

    getHead() {
      return head.get(this);
    }

    getTail() {
      return tail.get(this);
    }
    }
  return DoublyLinkedList2;
})();
