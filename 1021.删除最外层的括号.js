/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */
/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  const arr = S.split('');
  const tem = [];
  let n = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (i !== 0 && tem.length === 0) {
      // 成为一对括号了，需要删除头尾
      arr.splice(i - 1, 1);
      arr.splice(n, 1);
      n = i = i - 2;
    }
    if (arr[i] === '(') {
      tem.push('(');
    } else {
      tem.pop();
    }
  }
  return arr.join('');
};
