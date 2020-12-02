/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const hasEq = (str) => {
    const map = {};
    for (let v of str) {
      if (map[v]) {
        return true;
      }
      map[v] = 1;
    }
    return false;
  }
  const len = s.length;
  if (len < 2) {
    return 1;
  }
  let start = 0;
  let end = 1;
  let max = 1;
  for (let i = 1; i < len; i++) {
    const newStr = str.split('').slice(start, end).join('')
    if (hasEq(newStr)) {
      start += 1;
      end += 1;
    } else {
      max += 1;
      end += 1;
    }
  }
  return max;
};
