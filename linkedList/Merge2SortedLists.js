let LinkedList = require("./LinkedList");
//data
let l1 = new LinkedList();
l1.add(1);
l1.add(2);
l1.add(3);
l1.add(4);
l1.add(5);
l1.add(200);

let l2 = new LinkedList();
l2.add(2);
l2.add(4);
l2.add(10);

let result = new LinkedList();
const mergeLists = (l1, l2) => {
  //when both empty return result
  if (!l1 && !l2) return result;
  else if (!l1 && l2) {
    //if l1 is empty fill result with l2 values
    result.add(l2.value);
    mergeLists(l1, l2.next);
  } else if (l1 && !l2) {
    //if l2 is empty fill result with l1 values
    result.add(l1.value);
    mergeLists(l1.next, l2);
  } else {
    //if both of them have values
    if (l1.value < l2.value) {
      //add the lower value
      result.add(l1.value);
      mergeLists(l1.next, l2);
    } else if (l2.value < l1.value) {
      //add the lower value
      result.add(l2.value);
      mergeLists(l1, l2.next);
    } else {
      //if they are equal add both
      result.add(l1.value);
      result.add(l2.value);
      mergeLists(l1.next, l2.next);
    }
  }
};
mergeLists(l1.getHead(), l2.getHead());
result.print();
