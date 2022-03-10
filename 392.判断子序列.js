/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (!s) {
    return true;
  }
  const tLen = t.length;
  const list = s.split('');
  for (let i = 0; i < tLen; i++) {
    if (t[i] === list[0]) {
      list.shift();
    }
  }
  if (list.length) {
    return false;
  } else {
    return true;
  }
};
// @lc code=end

