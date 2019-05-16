/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let num = 0;
  const map = {};
  for (let index = 0; index < chars.length; index++) {
    const item = chars[index];
    if (!map[item]) {
      map[item] = 1;
      num++;
    } else {
      chars.splice(index, 1);
      index--;
      map[item]++;
      if (map[item] >= 10) {
        num++;
      }
      if (map[item] >= 100) {
        num++;
      }
    }
  }
  for (let i = 0; i < chars.length; i++) {}
  return num;
};
