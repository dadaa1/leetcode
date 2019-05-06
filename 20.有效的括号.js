/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const list = [];
  const map = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (item === '(' || item === '[' || item === '{') {
      list.push(item);
    } else if (map[item] === list[list.length - 1]) {
      list.pop();
    } else {
      return false;
    }
  }
  return !list.length;
};
