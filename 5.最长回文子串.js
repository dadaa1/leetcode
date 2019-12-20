/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const isPalindrome = (str) => {
    return str.split('').reverse().join('') === str;
  }
  const len = s.length;
  if (len < 2) {
    return s;
  }
  const list = s.split('');
  let res = '';
  for (let i = 0; i < len; i++) {
    if (res.length > len - i) {
      return res;
    }
    for (let j = len; j > i; j--) {
      const str = list.slice(i, j).join('');
      if (isPalindrome(str)) {
        if (str.length > res.length) {
          res = str;
        }
        break;
      }
    }
  }
  return res;
};
// @lc code=end

