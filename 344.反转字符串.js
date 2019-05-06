/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  const len = s.length;
  let str = null;
  for (let i = 0; i < parseInt(len / 2); i++) {
    str = s[len - 1 - i];
    s[len - 1 - i] = s[i];
    s[i] = str;
  }
};
