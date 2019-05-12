/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s === '') {
    return true;
  }
  const arr = s.split('');
  while (arr.length) {
    if (arr.length === 1) {
      return true;
    }
    let first = arr.pop();
    let last = arr.shift();
    while (!/\w|\d/g.test(first)) {
      if (arr.length === 0) {
        return true;
      }
      first = arr.pop();
    }
    while (!/\w|\d/g.test(last)) {
      if (arr.length === 0) {
        return true;
      }
      last = arr.shift();
    }
    if (first.toUpperCase() !== last.toUpperCase()) {
      return false;
    }
  }
  return true;
};
