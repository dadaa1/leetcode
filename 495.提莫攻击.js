/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  let res = 0;
  let pre = 0;
  while (timeSeries.length) {
    const item = timeSeries.shift();
    res += duration;
    if (pre && item - pre < duration) {
      const diff = item - pre - duration;
      // 减去多加的步数
      res += diff;
    }
    pre = item;
  }
  return res;
};

/**
 * 判断前一个数和当前数的差值，当差值大于步数的时候加步数，否则加差值
 * 我的方法是先加上，判断出差值再减去
 */
