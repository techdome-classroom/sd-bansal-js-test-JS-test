const decodeTheRing = function (s, p) {
  // write your code here

  if (s.length !== p.length) {
    return false;
  }

  // Loop through each character in the string and p
  for (let i = 0; i < s.length; i++) {
    // If the p character is '*', skip to the next character
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
