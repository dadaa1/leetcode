/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  return intervals.reduce((pre, item, index) => {
    if (!index) {
      pre.push(item);
      return pre;
    }
    const preItem = pre.pop();
    if (preItem[1] < item[0]) {
      // 这俩数组没有交集
      pre.push(preItem, item);
    } else {
      const min = Math.min(...preItem, ...item);
      const max = Math.max(...preItem, ...item);
      pre.push([min, max]);
    }
    return pre;
  }, []);
};
