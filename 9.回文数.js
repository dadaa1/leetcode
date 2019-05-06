/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  return (
    `${x}`
      .split('')
      .reverse()
      .join('') === `${x}`
  );
};
