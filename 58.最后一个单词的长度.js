/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const arr = s.split(/\s+/);
  if (arr[arr.length - 1] === '') {
    arr.pop();
  }
  if (arr.length === 0) {
    return 0;
  }
  return arr[arr.length - 1].length;
};
