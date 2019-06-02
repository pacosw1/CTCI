class Stack {
  constructor() {
    this.array = [];
  }
  //print
  print() {
    console.log(this.array);
  }
  //adds a new value to the array
  push(val) {
    this.array[this.array.length] = val;
  }
  //returns length
  length() {
    return this.array.length;
  }
  //check if array is empty
  isEmpty() {
    return this.array.length == 0;
  }
  //remove latest addition from stack
  pop() {
    if (this.isEmpty()) return;
    let copy = this.array;
    let val = this.array[this.array.length - 1];
    copy.splice(this.array.length - 1);
    this.array = copy;
  }
  //get top value in stack
  peek() {
    if (this.isEmpty()) return -1;
    return this.array[this.array.length - 1];
  }
}

//////////////////////
let stack = new Stack();
stack.push(10);
stack.push(10);

console.log(stack.length());
stack.pop();
console.log(stack.peek());
stack.print();

//make exportable
module.exports = Stack;
