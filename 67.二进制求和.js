/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const ar = a.split('');
  const br = b.split('');
  let long = ar.length > br.length ? ar : br;
  let short = ar.length > br.length ? br : ar;
  const result = [];
  const remainder = long.reduceRight((pre, item) => {
    item = Number(item) + Number(pre) + Number(short.pop() || 0);
    pre = parseInt(item / 2);
    item = item % 2;
    result.unshift(item);
    return pre;
  }, 0);
  if (remainder) {
    result.unshift(1);
  }
  return result.join('');
};
