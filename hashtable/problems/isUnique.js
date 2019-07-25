//check if all characters in a string are unique
const isUnique = string => {
  let hash = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] in hash) return false;
    else hash[string[i]] = 1;
  }
  return true;
};

console.log(isUnique("heloo"));
