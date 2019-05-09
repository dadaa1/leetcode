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
    return 1;
  }
  let start = 0;
  let end = 2;
  for (end; end < s.length; end++) {
    for (start; start < end; start++) {}
  }
};
