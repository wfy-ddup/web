var m = require('./8.js');
m.setItem('a',function(){
  console.log(this);
});
var $this = m.getItem('a');
console.log($this);
