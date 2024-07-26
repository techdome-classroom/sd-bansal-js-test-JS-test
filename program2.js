const decodeTheRing = function (s, p) {
  // write your code here

  if (s.length !== pattern.length) {
    return false;
  }

  // Loop through each character in the string and pattern
  for (let i = 0; i < s.length; i++) {
    // If the pattern character is '*', skip to the next character
    if (pattern[i] === "*") {
      continue;
    }
    // If the characters do not match, return false
    if (s[i] !== pattern[i]) {
      return false;
    }
  }

  // If all characters match, return true
  return true;
};

module.exports = decodeTheRing;
