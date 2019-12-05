/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  const list = [0, 0, 0];
  nums.forEach(item => {
    list[item] += 1;
  });
  nums.length = 0;
  list.forEach((item, index) => {
    while (item) {
      nums.push(index);
      item -= 1;
    }
  })
};
// @lc code=end

