let re = require("./ss.js");


let obj = {
  "a":5,
  "c":{
    "bd":0,
    "s":"sine"
  }
}

function clone(origin){
  let originProto = Object.getPrototypeOf(origin);
  return Object.assign(Object.create(originProto),origin);
}

// var cloneObj = clone(obj);
// var bool = Object.is(obj,cloneObj);
// console.log(obj,bool,cloneObj);
// 
class OBJ {
  constructor(x,y){
    Object.assign(this,{x,y});
  }
  arr(){ console.log(this);return [1,2,36,5] }
}

class newObj extends OBJ {
  constructor(x,y,z){
    super(x,y);
    this.age = x*y*z;
  }
  conThis(){
    this.add(1,"55_");
  }
  add(m,n){ console.log(m+n) }
}

// let sobj = new newObj(5,6,10);

// let arr = sobj.arr();
// sobj.conThis();

// console.log(OBJ.prototype.arr());

// console.log(new OBJ(1,2));

function Fn(x,y){
  this.x = x;
  this.y = y;
  this.say = function(){ console.log(this); }
}

var oo = new Fn(2,10);
oo.say();

var aa = {
  say:function(){
    console.log(this);
  }
}
