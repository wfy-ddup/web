/**
 * 扩展运算符
 */

// 扩展运算符 好比rest参数的逆运算，将一个数组转为用逗号分隔的参数序列

// console.log(...[1,2,3]);

// function add(x,y){
//   return x+y;
// }

// var numbers = [3,7];
// console.log( add(...numbers) );
// 

// es5
// function f(x,y,z){
//   console.log(x,y,z);
// }

// var args = [0,1,2];

// f.apply(null,args);

// // es6

// f(...args);


 
// 数组的合并
// es5
// let more = [5,4,3,2,1];
// let m = [1,2,3,4].concat(more);
// console.log(m);

// // es6
// let mm = [1,2,3,4,...more];
// console.log(mm);


// //  数组的合并

// let arr1 = ['a','b','c'];
// let arr2 = ['e','f','g'];
// let arr3 = ['a','b','c'];
// // es5
// arr1.concat(arr2,arr3);
// // es6
// arr1.push(...arr2,...arr3);
// console.log(arr1);
// console.log( [...arr2,...arr3] );


// 与结构赋值结合

// slice   // 截取数组 slice(start,end);
// var arr = [1,2,3,4,5,6,7,8,9];
// const [first,...rest] = arr;
// console.log(first,rest);

// const [...butlast,last] = [1,2,3,4,5,6];     // error
// const [first,...middle,lastArr] = [1,2,3,4,5,6,7];  // error
// console.log(butlast,last);                // error
// console.log(first,middle,lastArr);         // error


// console.log([...'hello']);
// console.log(Array.from('hello'));

// var divList = document.querySelectorAll(".test_01");
// var array = [...divList];
// console.log(array);

let arrayLike = {
  '0':'a',
  '1':'b',
  '2':'c',
  length:3
}

let arr1 = Array.from(arrayLike);
// let arr2 = [...arrayLike];
console.log(arr1);

// Array.of();    //将一组数转化成数组


























