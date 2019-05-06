/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return '';
  }
  let str = '';
  let item = '';
  const minLen = Math.min.apply(null, strs.map(item => item.length));
  for (let i = 0; i < minLen; i++) {
    item = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (item !== strs[j][i]) {
        return str;
      }
    }
    str += item;
  }
  return str;
};
