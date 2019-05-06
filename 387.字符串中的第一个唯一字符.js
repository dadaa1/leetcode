/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let flag = true;
  for (let i = 0; i < s.length; i++) {
    flag = true;
    for (j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        flag = false;
      }
    }
    if (flag) {
      return i;
    }
  }
  return -1;
};
