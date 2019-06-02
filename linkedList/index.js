class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  //adds a key value pair to the linked list
  add(key, value) {
    if (!this.head) {
      this.head = new ListNode(key, value);
      this.tail = this.head;
    } else {
      this.tail.next = new ListNode(key, value);
      this.tail = this.tail.next;
    }
  }
  //finds the value for given key
  find(key) {
    while (this.head) {
      if (this.head.key == key) return { success: 1, value: this.head.value };
      this.head = this.head.next;
    }
    return { success: 0, value: "not found" };
  }

  //prints whole linked list
  print() {
    while (this.head !== this.tail) {
      console.log(this.head.value);
      this.head = this.head.next;
    }
  }
}

//node used to store data inside linked list
class ListNode {
  constructor(key, value) {
    this.value = value;
    this.key = key;
    this.next = null;
  }

  print() {
    console.log(this.value);
  }
}

//make class exportable
module.exports = LinkedList;
