/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const res = [];
  const map = {};
  nums1.forEach(item => {
    map[item] = map[item] ? map[item] + 1 : 1;
  });
  nums2.forEach(item => {
    if (map[item]) {
      res.push(item);
      map[item] -= 1;
    }
  });
  return res;
};
// @lc code=end
