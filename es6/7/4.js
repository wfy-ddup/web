/*  
  // 为对象添加 属性
  // class Point  相当于构造函数Point的原型对象
  // 原型对象constructor属性 指向的是Point的构造函数
  class Point {
    constructor(x,y){
      Object.assign(this,{x,y});
    }
  }
  // 检测的几种方法
  // Array.prototype.slice.call();
  // {}.prototype.toString.call();
  // [5,2,1] instanceof Array

  // let smallPoint = new Point(0,9);
  // function Point2(){
  //   this.x = arguments[0];
  //   this.y = arguments[1];
  //   console.log(this.x,this.y);
  // }
  // Point2.prototype.constructor(10,5);
  
  
  function SomeClass(){}
  Object.assign(SomeClass.prototype,{
    someMethod(){
      let reaArr = Array.prototype.slice.call(arguments);
      return reaArr.map((item,index)=>{
        return item+1;
      })
    },
    anotherMethod(x){
      return Object.prototype.toString.call(x);
    }
  });

  var aa = new SomeClass();

  var variableType = aa.anotherMethod("555");
  var backArr = aa.someMethod(0,1,2,3,4,5,6,7,8,9);
  console.log(variableType,backArr);


  // 克隆对象
  function clone(origin){
    return Object.assign({},origin)
  }
  let obj = {
    a: 5,
    b: 3,
    c: 10
  }
  let newObj = clone(obj);
  console.log(newObj);

*/

const source = {
  set foo(value){
    console.log(value);
  }
}

const target2 = {};
Object.defineProperties(target2,Object.getOwnPropertyDescriptors(source));
Object.getOwnPropertyDescriptor(target2,'foo');









































  
