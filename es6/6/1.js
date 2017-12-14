// es6 允许直接写入变量和函数，作为对象的属性和方法
// 
// 
// 这里是将一个对象的值 赋值 给 baz
// 如果是变量赋值 等号左右的模式 要保持一致
// var foo = 'bar';
// var baz = {foo};
// console.log(baz);

// 等价于
// var foo = "foo";
// var baz = {foo:foo};
// console.log(baz);

// 上边代码中，es6允许在只写属性而不写属性值，但是此时属性值等于属性名代表的变量

// function f(x,y){
//   return {x,y};
// }

// var obj = f(4,5);
// console.log(obj);

// 等价于 
// function f(x,y){
//   return {x:x,y:y}
// }
// console.log(f(4,5));



// 方法的简写
// var o = {
//   methods(){
//     // 等同于 methods:function(){...}
//     console.log("hello");
//   }
// }
// o.methods();

// 等价于
var o = {
  methods:function(){console.log("hello");}
}
o.methods();

var birth = '2001/01/01';
var Person = {
  name:"张三",
  birth,   // birth:birth  es6 对其的简化写法
  hello(){console.log("我的名字是"+this.name)}
}
Person.hello();

// 在函数中直接返回 一个对象，属性值名 是与属性名相同的变量
function f(){
  var x=1;
  var y=2;
  return {x,y}
}
console.log(f());
















































