/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let len = digits.length;
  if (!len) {
    return [1];
  }
  digits.reduceRight((pre, item, index, arr) => {
    if (item + pre < 10) {
      arr[index] = item + pre;
      return 0;
    }
    // 这里的index不是从0开始的，而是从len开始的
    if (index === 0) {
      arr[index] = 0;
      digits.unshift(1);
      return 0;
    } else {
      console.log(index);
      arr[index] = 0;
      return 1;
    }
  }, 1);
  return digits;
};
