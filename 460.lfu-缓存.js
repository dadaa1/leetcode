/*
 * @lc app=leetcode.cn id=460 lang=javascript
 *
 * [460] LFU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.capacity = capacity;
  this.len = 0;
  this.map = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  if (key in this.map) {
    this.map[key].num += 1;
    this.map[key].time = new Date();
    return this.map[key].value;
  }
  return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (!this.capacity) {
    return;
  }
  if (key in this.map) {
    this.map[key].num += 1;
    this.map[key].time = new Date();
    this.map[key].value = value;
    return;
  }
  this.len += 1;
  if (this.len > this.capacity) {
    // 删除最不常用的，最近最久未使用
    // this.del();
    let delKey = null;
    let min = Infinity;
    Object.keys(this.map).forEach(el => {
      console.log(el);
      if (this.map[el].num < min) {
        min = this.map[el].num;
        delKey = el;
      }
      if (this.map[el].num === min) {
        if (this.map[el].time > this.map[delKey].time) {
          delKey = el
        }
      }
    });
    if (delKey) {
      console.log('del', delKey);
      this.len -= 1;
      delete this.map[delKey]
    }
  }
  this.map[key] = { num: 1, value, time: new Date() };
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

