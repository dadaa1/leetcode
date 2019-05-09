class Event {
  constructor() {
    this.list = {};
  }
  on(event, func) {
    if (!this.list[event]) {
      this.list[event] = [];
    }
    if (typeof func === 'function') {
      this.list[event].push(func);
    }
  }
  off(event, func) {
    if (this.list[event]) {
      this.list[event] = this.list[event].filter(item => item !== func);
    }
  }
  emit(event, ...arg) {
    if (this.list[event]) {
      this.list[event].forEach(item => {
        item.apply(null, arg);
      });
    }
  }
}

String.prototype.trim = function() {
  return this.replace(/(^\s*)|(\s*$)/g, '');
};

function getArguments() {
  const arg = arguments;
  // return [...arg];
  // return Array.from(arg);
  return Array.prototype.slice.apply(arg);
}

Function.prototype.bind2 = function(context, ...otherArg) {
  return (...arg) => {
    this.apply(context, otherArg.concat(arg));
  };
};

Function.prototype.before = function(...arg) {};
