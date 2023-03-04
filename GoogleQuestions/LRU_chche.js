class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = {};
    this.cache_vals = new LinkedList();
  }

  set(key, value) {
    // TODO: Write - Your - Code
  }

  get(key) {
    // TODO: Write - Your - Code
    return -1;
  }

  print() {
    let result = "";
    let node = this.cache_vals.head;
    while (node) {
      result += "(" + node.key + ":" + node.data + "),";
      node = node.next;
    }
    return result;
  }
}

console.log("");
console.log("+++++++++++++++++++++++++++++++++++++++");
console.log("LRUCache");
console.log("---------------------------------------");
let cache1 = new LRUCache(15);
let key = 10;
let val = 20;
cache1.set(10, val);
cache1.printcache();
cache1.set(15, 25);
cache1.printcache();
cache1.set(20, 30);
cache1.printcache();
cache1.set(25, 35);
cache1.printcache();
cache1.set(10, 20);
cache1.printcache();
console.log("++++++ Test Done Successfully ++++++");
