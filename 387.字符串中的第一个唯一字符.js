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
  const map = {};
  [...s].forEach(item => {
    if (map[item] !== undefined) {
      map[item] = false;
      return;
    }
    map[item] = true;
  });
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      return i;
    }
  }
  return -1;
};
