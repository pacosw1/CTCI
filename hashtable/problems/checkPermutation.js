//given two string writer a method to decide if one is a permutation of the other

const checkPermutation = (s, t) => {
  let hash = {};
  //once we have the possible chars that must be in the other string, we can go ahead and check the second string
  for (let i = 0; i < s.length; i++) {
    if (s[i] in hash) hash[s[i]] += 1;
    else hash[s[i]] = 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (t[i] in hash) hash[t[i]] -= 1;
  }

  let keys = Object.keys(hash);

  for (let i = 0; i < keys.length; i++) {}
};

//dog   god
