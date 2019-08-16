/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  const map = {};
  for (let k in t) {
    if (map[t[k]]) {
      map[t[k]] += 1;
    } else {
      map[t[k]] = 1;
    }
  }
  for (let k in s) {
    if (map[s[k]] === 1) {
      delete map[s[k]];
    } else {
      map[s[k]] -= 1;
    }
  }
  return Object.keys(map)[0];
};
