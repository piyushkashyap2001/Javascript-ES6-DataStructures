const Queue = (() => {
  const items = new WeakMap();
  class Queue {
    constructor() {
      items.set(this, []);
    }
    enqueue(element) {
      const q = items.get(this);
      q.push(element);
    }
    dequeue() {
      const q = items.get(this);
      const r = q.shift();
      return r;
    }
    front() {
      return this.items[0];
    }
    isEmpty() {
      return this.items.length === 0;
    }
    size() {
      return this.items.length;
    }
    print() {
      console.log(this.items.toString());
    }
 }
  return Queue;
})();
