// 获取数组的前几项排名
Array.prototype.getTopN = function getTopN(n) {
  var n = this.length > n ? n : this.length;
  var cn = this.concat();
  function compare (v1, v2) {
    var v1 = Number(v1);
    var v2 = Number(v2);
    if (v1 < v2) {
      return 1
    } else if (v1 > v2) {
      return -1
    } else {
      return 0
    }
  }
  var topNA = cn.sort(compare).splice(0,n);
  var topNIdx = [];
  for (var i = 0; i < n; i++) {
    this.indexOf(topNA[i]) > 0 ? topNIdx.push(this.indexOf(topNA[i])) : 0;
  }
  return topNIdx
}
var arr = [5,6,8,9,100,2,4,7,3,6,0,21,11,50,24,10];
console.log( arr.getTopN(0) );