/*
  1.module.exports 初始值为一个空对象 {}
  2.exports 是指向module.exports的引用
  3.require()返回的是module.exports而不是exports
 */

let ms = {};
function getItem (key) {
  return key in ms ? ms[key] : null;
}
function setItem (key, value) {
  ms[key] = value;
}
function clear () {
  ms = {};
}

module.exports = {
  getItem,
  setItem,
  clear
}
