/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0;
  let j = height.length - 1;
  let max = 0;
  while (i <= j) {
    let area = (j - i) * Math.min(height[i], height[j]);
    if (area > max) {
      max = area;
    }
    if (height[i] > height[j]) {
      j -= 1;
    } else {
      i += 1;
    }
  }
  return max;
};
// @lc code=end

