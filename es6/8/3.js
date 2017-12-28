/* es5
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function(){
  return '(' + this.x + ',' + this.y + ')';
}

var p = new Point(1, 2);
*/


/*
// es6 
// Point
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ',' +this.y + ')'
  }
}

var p1 = new Point(1, 2);

console.log(p1.toString());
*/


/*

// Bar
class Bar {
  doStuff() {
    console.log('stuff');
  }
}

var b = new Bar();

b.doStuff();
var hasX = p.hasOwnProperty('x');
var hasF = b.__proto__.hasOwnProperty('doStuff');
console.log(hasX,hasF);
*/

/*
var p2 = new Point(3, 4);
console.log(p1.__proto__ === p2.__proto__);

let person = new class {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}('张三');
person.sayName();
*/

/*
class Widget {
  // 公有方法
  foo(baz) {
    this._bar(baz);
  }
  // 是有方法
  _bar(baz) {
    return this.snaf = baz;
  }
}

var w = new Widget();
*/


/*
class Logger {
  printName(name = 'there') {
    this.print(`hello ${name}`);
  }

  print(text) {
    console.log(text);
  }
}

const logger = new Logger();

const { printName } = logger;

// console.log(printName);    // 无法绑定this

logger.printName('baidu');

*/


/*
class Logger {
  constructor() {
    this.printName = this.printName.bind(this);   // g构造函数中绑定this
  }

  printName(text) {
    console.log(text);
  }
}


const logger = new Logger();
const {printName} = logger;
console.log(printName);
printName('wfy');
*/


/*
class Logger {
  constructor() {
    this.printName = (name = 'there') => { this.print(`hello ${name}`); }
  }
  print(txt) {
    console.log(txt);
  }
}

// es5
// function Logger() {
//   this.printName = function(name){
//     this.printFn( 'hello ' + name );
//   }.bind(this)
// }
// Logger.prototype.printFn = function(txt){ console.log(txt) }

const logger = new Logger();
const {printName} = logger;
printName('hefei');
logger.printName('world');

*/


/*
class MyClass {
  constructor() { }
  get prop() {
    return 'getter'
  }
  set prop(value) {
    console.log('setter: ' + value)
  }
}

let inst = new MyClass();

inst.prop = 123;

console.log(inst);
console.log( inst.prop );
*/

/*
// set get
const cart = {
  _wheels:4,
  get wheels(){
    return this._wheels + ' 轮车';
  },
  set wheels(val){
    if(val<2){
      throw new Error("轮子太少");
    }else{
      this._wheels = val;
    }
  }
}
*/

var userInfo = { num:10 };
Object.defineProperty(userInfo,"num",{
  get:function(){
    return Number( document.getElementById("num").value );
  },
  set:function(num){
    document.getElementById("num").value = num;
  },
  configurable:true,
  enumerable:true
});

console.log(userInfo.num);
