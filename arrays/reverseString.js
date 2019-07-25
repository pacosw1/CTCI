const reverseString = string => {
  let array = string.split("");
  let left = 0,
    right = array.length - 1,
    temp = "",
    res = "";
  while (left < right) {
    temp = array[left];
    array[left] = array[right];
    array[right] = temp;
    left++, right--;
  }
  array.forEach(char => {
    res += char;
  });
  return res;
};
