/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.list = [];
  this.map = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (typeof this.map[key] === 'number') {
    const index = this.list.findIndex(item => item === key);
    this.list.splice(index, 1);
    this.list.unshift(key);
    return this.map[key];
  }
  return - 1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (typeof this.map[key] === 'number') {
    this.map[key] = value;
    this.get(key);
    return;
  }
  this.map[key] = value;
  this.list.unshift(key);
  if (this.list.length > this.capacity) {
    const delKey = this.list.pop();
    delete this.map[delKey];
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

