/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const arr = s.split('');
  let val = 0;
  arr.reduce((pre, item) => {
    const group = pre + item;
    if (group === 'IV' || group === 'IX') {
      val -= 2;
    }
    if (group === 'XL' || group === 'XC') {
      val -= 20;
    }
    if (group === 'CD' || group === 'CM') {
      val -= 200;
    }
    val += map[item];
    return item;
  }, '');
  return val;
};
