/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  function mySort(a, b) {
    // a的长度大于b
    const al = a.split('');
    const bl = b.split('');
    let pre = bl[0];
    while (al.length) {
      const aa = al.shift();
      const bb = bl.shift();
      if (bb === undefined) {
        if (aa > pre) {
          return -1;
        }
        return 1;
      }
      if (aa - bb > 0) {
        return 1;
      }
      if (aa - bb < 0) {
        return -1;
      }
    }
  }
  return nums
    .sort((a, b) => {
      const as = String(a);
      const bs = String(b);
      if (as.length === bs.length) {
        return a - b;
      }
      if (as.length > bs.length) {
        return mySort(as, bs);
      }
      if (as.length < bs.length) {
        return -1 * mySort(bs, as);
      }
    })
    .reverse()
    .join('');
};
// @lc code=end
