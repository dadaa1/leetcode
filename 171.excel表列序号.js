/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  //一个27进制的数字转化为10进制
  const arr = s.split('');
  let n = 1;
  return arr.reduceRight((pre, item) => {
    pre += (item.charCodeAt() - 64) * n;
    n *= 26;
    return pre;
  }, 0);
};
