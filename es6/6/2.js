// commonJS 模板输出变量

var ms = {
  name:"wfy",
  age:26,
  address:"安徽",
  phone:"18656070675",
  sex:0
};
function getItem(key){
  return key in ms ? ms[key] : null;
}

function setItem(key,value){
  ms[key] = value;
}

function clear(){
  ms = {};
}


// 浏览器无法 解析 需要运行在node上才行
/*
var cart = {
  _wheels:4,
  get wheels(){
    return this._wheels
  }
  set wheels(val){
    if(value < this._wheels){
      throw new Error("数值太小")
    }
    this._wheels = val
  }
}
*/
// 不懂
var obj = {
  *m(){
    yield "hello world"
  }
}

obj.m();
// module.exports={getItem,setItem,clear} //变量的输出






/*********************************************************************/
/**
 * 双向数据绑定的原理
 */
// mm    数据改变数据
// var o = {};
// Object.defineProperty(o,"a",{
//   value:37,
//   configurable:true,
//   enumerable:true,
//   writable:true
// });
// var bValue = 38;
// Object.defineProperty(o,"b",{
//   get:function(){
//     return bValue;
//   },
//   set:function(newVaule){
//     bValue = newValue
//   }
// });



// // mv  数据改变  视图改变
// var userInfo = {
//   num:10
// };
// Object.defineProperty(userInfo,"num",{
//   get:function(){
//     console.log(document.getElementById("num").value);
//     return document.getElementById("num").value;
//   },
//   set:function(num){
//     console.log(num);
//     document.getElementById("num").value = num;
//   },
//   configurable:true,
//   enumerable:true
// });
/*********************************************************************/





//Object.assign();
// Object.assign() 方法用于对象的合并，并将源对象(source)的所有可枚举属性，赋值到目标对象

// var target = { a:1 };
// var source1 = { b:2 };
// var source2 = { c:3 };

// Object.assign(target,source1,source2);
// console.log(target);


var obj1 = {
  name:"wfy",
  age:26
}

var obj2 = {
  name:"lyy",
  sayName:function(){
    alert(this.name);
  }
}

var obj3 = {
  address:{
    nationality:"CN",
    province:"ANHUI"
  },
  intrMe:function(){
    console.log("my name is "+this.name+", address "+this.nationality+" , "+this.province)
  }
}

//var prototype1 = obj1.prototype;

//var all3 = Object.assign(obj1,obj2,obj3);
// console.log(all3,obj1);    obj1 对象呗改变

//var prototype2 = obj1.prototype;
//var isSome = Object.is(prototype1,prototype2);
//console.log(isSome);
// console.log(obj1);

// 在只有一个参数的是  就返回原来的对象
var onlyProperty = { a:3 };
Object.assign(onlyProperty); // 返回原数组


//console.log(Object.assign(1));     // 参数如果不是对象这回将其先转换成对象，然后再返回

// var v1 = 'abc';
// var v2 = true;
// var v3 = 10;

// var newObj = Object.assign({},v1,v2,v3);
// console.log(newObj);  // {0:"a",1:"b",3:"c"}

// 只有可枚举的对象才能 使用Object.assign()


var obj1 = {a:{b:1}};
var obj2 = Object.assign({},obj1);
console.log(obj2);





































