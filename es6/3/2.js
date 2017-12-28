// 数组实例的find()和findIndex()

/*
* find 方法，用于找出第一个符合条件的数组成员，参数是一个回调函数，数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员，如果没有返回undefined
*
* findIndex 方法，用于找到第一个符合条件的数组成员的位置，find()返回的是数组的成员，如果没有则返回-1
*
*/

// var small = [1,4,-5,-10].find(n=>n<0);
// console.log(small);  // -5 找到就返回，没有找到就返回undefined，只找到第一个


// val:数组的值 相当于item
// index:值的下标 index
// arr 原数组
// var bigger9 = [1,5,2,10,15].find((val,index,arr)=>{   // 找到就退出
//   console.log(val);
//   console.log(index);
//   console.log(arr);
//   return val>9;
// })

var obj = {
  name:"name"
};

// var small4 = [1,2,3,5,8,9].findIndex((val,index,arr)=>{
//   console.log(val,index,arr);
//   console.log(this);
//   return val>8;
// });


// 绑定回调函数的this对象 
// 使用箭头函数时无法绑定this对象
// var small4 = [1,2,3,5,8,9].findIndex(function(val,index,arr){
//   console.log(val,index,arr);
//   console.log(this.name);
//   return val>8;
// },obj);
//console.log(small4);


// test indexof() lastIndexOf() 
// 查找数组中的某个值对应的下标，有返回下标，没有返回-1
// indexOf() 重头开始查找  lastIndexOf() 重结尾开始查找
// var testArr = ["test1","test2","test3","test4","test5","test6"];
// var index = testArr.indexOf("test7");
// var lastIndex = testArr.lastIndexOf("test7");
// console.log(index,lastIndex);








// 数组实例的fill() 方法

/**
  fill 方法使用给定值，填充一个数组,改变原数组，不返回新数组
  接受三个参数
  填充的值
  填充的开始位置
  填充的结束位置
*/
// var oldArr = [1,2,3,4];
// var fillArr1 = oldArr.fill(7);
// var fillArr2 = oldArr.fill(2,2,4);
// console.log(oldArr,fillArr1,fillArr2);  // [7, 7, 2, 2]


// 数组的splice方法 对数组的 增 删 改  返回的数组为别截取的数值组成的数组

// var oldOriginArr = [5,8,9,6,3,4,7,1,2];
// var new1 = oldOriginArr.splice(0,1,[36,15,20,30]);
// console.log(new1);









/**
 * 数组实例的entries(),keys() 和 values();
 * 三个新方法都用于遍历数组。
 * keys() 是对键的遍历
 * values() 是对值的遍历
 * entries() 是对键值对的遍历
 */

// var oldArr = [1,2,3,4,5,6,7,8,9];
// for(let index of oldArr.keys()){
//   console.log(index);
// }

// for(let [index,val] of oldArr.entries()){
//   console.log("index"+index+"-val"+val);
// }

// for(let val of oldArr.values()){
//   console.log(val);
// }




/**
 *  数组实例的includes() es7方法
 */

// var test1 = [1,0,2,NaN,false,true,-1];
// console.log( test1.includes(NaN) );


// 没有看懂这个函数
// const contains = (
//   ()=>Array.prototype.includes?(arr,value)=>arr.includes(value):(arr,value)=>arr.some(el=>el===value)
// )()
// contains([1,23,5,"wfy"],"wfy");






















