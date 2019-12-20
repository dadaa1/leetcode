/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  const list = [];
  for (let i = 0; i < numRows; i++) {
    list.push([]);
  }
  let x = 0;
  let flag = true;
  let y = 0;
  s.split('').forEach(item => {
    list[y][x] = item;
    if (flag) {
      y += 1;
    } else {
      y -= 1;
    }
    if (!flag) {
      x += 1;
    }
    if (y === 0 || y === numRows - 1) {
      flag = !flag;
    }
  });
  let res = '';
  list.forEach(item => {
    item.forEach(el => {
      res += el;
    })
  });
  return res;
};
// @lc code=end

