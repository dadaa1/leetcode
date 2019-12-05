/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const list1 = version1.split('.');
  const list2 = version2.split('.');
  while (list1.length) {
    const a = list1.shift();
    const b = list2.shift() || 0;
    if (Number(a) > Number(b)) {
      return 1;
    }
    if (Number(a) < Number(b)) {
      return -1;
    }
  }
  while (list2.length) {
    if (Number(list2.shift())) {
      return -1;
    }
  }
  return 0;
};
// @lc code=end

