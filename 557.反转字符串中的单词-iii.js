/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  function reverse(str) {
    let ss = '';
    for (let i = str.length - 1; i >= 0; i--) {
      ss += str[i];
    }
    return ss;
  }
  return s
    .split(' ')
    .map(item => reverse(item))
    .join(' ');
};
