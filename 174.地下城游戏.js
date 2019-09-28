/*
 * @lc app=leetcode.cn id=174 lang=javascript
 *
 * [174] 地下城游戏
 */
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function(dungeon) {
  const width = dungeon.length - 1;
  const height = dungeon[0].length - 1;
  let num = 0;
  function dp(x, y) {
    if (x === 0 && y === 0) {
      return [dungeon[x][y], dungeon[x][y]];
    }
    if (x === 0) {
      const [a, min] = dp(x, y - 1);
      return [a + dungeon[x][y], Math.min(min, a + dungeon[x][y])];
    }
    if (y === 0) {
      const [a, min] = dp(x - 1, y);
      return [a + dungeon[x][y], Math.min(min, a + dungeon[x][y])];
    }
    const [d1, min1] = dp(x, y - 1);
    const [d2, min2] = dp(x - 1, y);
    // if(d1+num)
    const m1 = Math.min(min1, d1 + dungeon[x][y]);
    const m2 = Math.min(min2, d2 + dungeon[x][y]);
    if (m1 > m2) {
      return [d1 + dungeon[x][y], m1];
    } else {
      return [d2 + dungeon[x][y], m2];
    }
  }
  const [, res] = dp(width, height);
  if (res >= 0) {
    return 1;
  }
  return 1 - res;
};
