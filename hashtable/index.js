//import a simple implementation of a linked list
let LinkedList = require("../linkedList");

class Hashtable {
  constructor() {
    this.array = new Array(10);
    this.initializeArray();
  }

  //creates a "unique" id to store in table
  generateHash(key) {
    let code = 0;
    for (let i = 0; i < key.length; i++) {
      code += key.charCodeAt(i) * this.array.length + 1;
    }
    return code;
  }
  //initializes LinkedLists inside array
  initializeArray() {
    for (let i = 0; i < this.array.length; i++) {
      this.array[i] = new LinkedList();
    }
  }

  //returns the value for the given key if it exists
  find(key) {
    let hash = this.generateHash(key);
    let index = this.assignIndex(hash);
    let list = this.array[index];
    let result = list.find(key);

    return result.value;
  }

  //using hash assigns an index to store info in array
  assignIndex(hash) {
    return hash % this.array.length;
  }

  //adds the key value pair into the specified index
  addToList(index, data) {
    let { val, key } = data;
    this.array[index].add(key, val);
  }

  //brings all other methods together to add key value into hash table
  add(key, val) {
    let hash = this.generateHash(key);
    let index = this.assignIndex(hash);
    console.log(`key: ${key} hash: ${hash} assigned index: ${index}`);
    this.addToList(index, { key: key, val: val });
  }

  //simply prints the array containing the linked lists
  print() {
    console.log(this.array);
  }
}

///
let hash = new Hashtable();
hash.add("a", 1);
hash.add("abcde", 10);
hash.add("paco", 3);
hash.add("ab", 15);
hash.add("abc", 5);
hash.add("v", 5);

// let node = new ListNode(10);
// node.print();
