/*
 * @lc app=leetcode.cn id=965 lang=javascript
 *
 * [965] 单值二叉树
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
  const loop = (obj, n) => {
    if (obj === null) {
      return true;
    }
    if (obj.val === n) {
      return loop(obj.right, n) && loop(obj.left, n);
    } else {
      return false;
    }
  };
  return loop(root, root.val);
};
