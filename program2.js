// const decodeTheRing = function (s, p) {

//     // write your code here

//   };
  
//   module.exports = decodeTheRing;

const decodeTheRing = function (s, p) {
  const m = s.length;
  const n = p.length;
  
  // Create a 2D DP table
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(false));
  
  // Base case
  dp[0][0] = true;// Both empty
 
  for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') {
          dp[0][j] = dp[0][j - 1];
      }
  }
  
 
  for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
          if (p[j - 1] === '*') {
              // '*' matches zero or more characters
              dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
          } else if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
              // '?' matches exactly one character or direct match
              dp[i][j] = dp[i - 1][j - 1];
          }
      }
  }
  
  return dp[m][n];
};

module.exports = decodeTheRing;
