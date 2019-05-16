/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length < 2) {
    return s.length;
  }
  const map = { length: 0 };
  // let start = 0;
  // let end = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
      map['length']++;
      if (max < map['length']) {
        max = map['length'];
      }
    }
  }
  return max;
};
