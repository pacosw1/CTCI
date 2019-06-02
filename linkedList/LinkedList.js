class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  //adds a key value pair to the linked list
  add(value) {
    if (!this.head) {
      this.head = new ListNode(value);
      this.tail = this.head;
    } else {
      this.tail.next = new ListNode(value);
      this.tail = this.tail.next;
    }
  }
  //finds the value for given key
  getHead() {
    return this.head;
  }
  //prints whole linked list
  print() {
    while (this.head) {
      console.log(this.head.value);
      this.head = this.head.next;
    }
  }
}

//node used to store data inside linked list
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  print() {
    console.log(this.value);
  }
}

module.exports = LinkedList;
