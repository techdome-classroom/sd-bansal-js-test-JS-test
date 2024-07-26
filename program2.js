const decodeTheRing = function (s, p) {
  // write your code here

  if (s.length !== p.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
   
    if (p[i] === "*") {
      continue;
    }
    // If the characters do not match, return false
    if (s[i] !== p[i]) {
      return false;
    }
  }

  // If all characters match, return true
  return true;
};

module.exports = decodeTheRing;
