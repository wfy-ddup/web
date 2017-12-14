/*数组的扩展*/
// Aaary.from() 用于将类数组对象和可遍历的对象转换成真正的数组对象

// let arrayLike = {
//   '0':'a',
//   '1':'b',
//   '2':'c',
//   length:3
// }

// es5
// var transformArray = Array.prototype.slice.call(arrayLike);
// console.log({}.toString.call(arrayLike));
// console.log(transformArray);

// es6

// var transformArray = Array.from(arrayLike);
// console.log(transformArray);

// let ps = document.querySelectorAll(".item_p");
// Array.from(ps).forEach((item,index)=>{
//   let attr = document.createAttribute("data-index");
//   let txt = document.createTextNode("-index"+index);
//   attr.value = index;
//   item.setAttributeNode(attr);
//   item.appendChild(txt);
// });

// let arr = (name)=>{
//   // console.log(arguments);  // es6箭头函数没有arguments对象
//   // console.log(Array.from(arguments));
//   return name
// }
// console.log(arr("why"));

// function foo(){
//   var f = (...args) => {return args[0]};
//   return f(2);
// }

// console.log(foo(1));

// let argu = (...args)=>{
//   console.log(...args);
//   console.log(args);
//   console.log(args[0]);
// }
// // let [a,...b] = [3,5,6];
// // console.log(b); // 3 [5,6];
// argu(1,2,3,4,5);



// 只要部署了iterator接口的数据结构，Array.from() 都能将其转为数组
// let helloArr = Array.from('hello');
// console.log(helloArr);

// let namesSet = new Set(['a','b']);
// console.log(namesSet);

// console.log(Array.from(namesSet));

// function foo(){
//   // ...arguments  error
//   // [...arguments] 不使用可以将arguments类数组对象转化成数组
//   let args = [...arguments];
//   console.log(args);
// }

// foo(1,2,3,5,4,69,8,7);



// Array.from() 方法可以接受第二个参数,对每一个元素进行处理 返回处理过后的新数组
// let arrayLike2 = {
//   '0':5,
//   '1':10,
//   '2':15,
//   length:3
// }

// var newLike1 = Array.from(arrayLike2,x=>x*x)
// var newLike2 = Array.from(arrayLike2,(x)=>{return x*x});
// var newLike3 = Array.from(arrayLike2).map( (x,index)=>{return x*x+index} );
// console.log(newLike1);
// console.log(newLike2);
// console.log(newLike3);


// let spans = document.querySelectorAll(".item_span");
// let methods1 = [].map.call(spans,(item)=>item.textContent);
// let methods2 = Array.from(spans,item=>item.textContent);
// console.log(methods1,methods2);

// let newArr = Array.from([1,,2,3,,5],val => val || 0);
// console.log(newArr);

// let diffArr = [1,1,2,3,5,5]
// let diffArr2 = diffArr;
// let someArr = Array.from(diffArr);

// console.log(someArr,diffArr,diffArr === someArr,diffArr2 === diffArr);

// let createNewArr = Array.from({length:5},(item,index)=>index+2);
// console.log(createNewArr);


// 创造自定长度的数据
// function createArr(num){
//   num = parseInt(num);
//   return Array.from({length:num>1?num:1},(item,index)=>index+1);
// }

// console.log(createArr(10));












//Array.of();    // 将一组值，转化为数组

// console.log( Array.of(3,11,8) );  // [3,11,8]

// console.log( Array.of() );   // []

// console.log( Array.of(1) );  // [1]











// 数组实例的 copyWithin();
// 将自定位置的成员复制到其他位置(会覆盖原有成员),然后返回当前数组。
// 三个参数 第一个为 开始替换的位置 第二个和第三个 分别取得代替数据的开始位置与结束位置，含头不含尾的
// var copy1 = [1,2,3,4,5].copyWithin(0,3);   // [4,5,3,4,5]
// var copy2 = [1,2,3,4,5].copyWithin(0,-3,-1); // [3,4,3,4,5]
// console.log(copy2);
var originArr = [5,4,3,2,1];
var i32a = new Int32Array(originArr);
console.log(i32a);
















