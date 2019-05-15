/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const map = { length: 0 };
  for (let i = 0; i < ransomNote.length; i++) {
    map.length++;
    if (!map[ransomNote[i]]) {
      map[ransomNote[i]] = 1;
    } else {
      map[ransomNote[i]]++;
    }
  }
  for (let i = 0; i < magazine.length; i++) {
    if (map[magazine[i]]) {
      if (map[magazine[i]] === 1) {
        delete map[magazine[i]];
      } else {
        map[magazine[i]]--;
      }
      map.length--;
    }
  }
  if (map.length) {
    return false;
  }
  return true;
};
