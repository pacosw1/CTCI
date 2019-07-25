const message = [
  "c",
  "a",
  "k",
  "e",
  " ",
  "p",
  "o",
  "u",
  "n",
  "d",
  " ",
  "s",
  "t",
  "e",
  "a",
  "l"
];

const reverseChars = (array, start, finish) => {
  let left = start,
    right = finish,
    temp = "";

  while (left < right) {
    temp = array[left];
    array[left] = array[right];
    array[right] = temp;

    left++, right--;
  }
};

console.log(message);

reverseWords = message => {
  reverseChars(message, 0, message.length - 1);
  console.log(message);
  //this reverses the order of the words. but also makes each word backwards

  let initPos = 0;
  for (let i = 0; i < message.length + 1; i++) {
    if (message[i] == " " || i == message.length) {
      reverseChars(message, initPos, i - 1);
      initPos = i + 1;
    }
  }
  console.log(message);
};

reverseWords(message);
