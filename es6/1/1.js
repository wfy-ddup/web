// for(var n = 1; n < 10; n++){
  
// }

// console.log(n);

// for(let i = 0; i < 10; i++){
//   console.log(i);
// }

// var a = [];
// for(var i = 0; i < 10; i++){
//   a[i]=function(){
//     console.log(i);
//   }
// }

// for(var n = 0; n < a.length; n++){
//   a[n]();
// }


// 不需要使用闭包
// var a = [];
// for(let i = 0; i < 10; i++){
//   a[i]=function(){
//     console.log(i);
//   }
// }

// for(var n = 0; n < a.length; n++){
//   a[n]();
// }


// for 中声明的i 与 for循环内部声明的i 作用域是不同的
// for(let i = 0; i < 3; i++){
//   let i = "abc";
//   console.log(i);
// }


// 变量名不会声明提前

// console.log(a1);   // undefined
// var a1 = "wfy"; 

// console.log(a2);  // error
// let a2 = "git";


// 暂时性的死区

// 变量在没有声明前就是用，则报错为undefined

// 在块级作用域中用let，coust命令
// 无法获取区块外的相同命名变量

// 暂时性死区 ：在当前作用域下，在使用let const命令情况下，如果在变量声明前使用变量，则报错

// var num = 123;
// if(true){
//   // tmp = "abc";     // error
//   let tmp;
//   tmp = "abc";
//   console.log(tmp);
//   console.log(num);
// }



// "暂时性的死区"也意味着typeof不再是一个百分百安全操作

// if(true){
//   typeof x;   // error
//   let x;
// }


// console.log(typeof y);   // error 
// let y;



// 隐蔽性的死区,在x=y时，y == undefined

// function bar1(x=y,y=2){    // error
//   return [x,y]
// }
// ler arr1 = bar1();


// function bar(y=2,x=y){
//   return [x,y];
// }

// let arr = bar();

// var x = x;
// console.log(x);   // undefined

// let y = y;
// console.log(y);   // error y is undefined



// 不允许重复声明
// function fun1(){
//   let a = 10;
//   var a = 1;
// }

// fun1();    // error a is has been declared

// function func(arg){
//   let arg;
// }

// func();     // error a is has been declared

// function func(arg){
//   let arg = arg
// }
// func(5);    // error a is has been declared

// function func(arg){
//   // 这里的{} 表示一个代码块
//   {
//     let arg = 5;
//     console.log(arg);
//   }

//   // 这里的{} 表示一个代码块
//   {
//     let arg = 3;
//     console.log(arg);
//   }
// }

// func(5)     // right

// var tmp = new Date(); // 1、变量的声明  tmp = new Date();

// function f(){
//   console.log(tmp);     // 3、变量的使用
//   if(false){
//     var tmp = "hello world";   // 2、声明提前，覆盖了1赋值  var tmp;(全局的)
//   }
// }

// f();   // undefined


// 循环变量泄露为 全局变量

// var s = "hello";
// for(var i = 0; i < s.length; i++){
//   console.log(s[i]);
// }

// console.log(i);

// function f1(){
//   let n = 5;
//   if (true){
//     let n = 10;
//   }
//   console.log(n);
// }
// f1();


// {              // 代码块
//     var a = 100;
//     console.log("insert"+a);
// }
// console.log("out"+a);

// {{{{{{
//   let insane = "hello world";
//   {let insane = "hello es6"}
// }}}}}}

// (function(){
//   var tmp = 555
// }()); // 自调函数



// // 代码块
// {
//   let tmp = 5;
// }


// console.log(tmp);  // error undefined

// var a = 0;
// var aa;
// if(a == 1){
//   aa = function(){
//     console.log(++a);
//   }
// }else{
//   aa = function(){
//     console.log(--a);
//   }
// }

// aa();


// es5 下 正常运行 
// es6 下 运行错误 es6 下 是有块级作用域的



// function f(){
//   console.log("i am outside");
// }

// (function(){
//   if(true){
//     function f(){
//       console.log("i am inside");
//     }
//   }
//   f();
// }());

// es5 没有问题
// {
//   function aa(){
//     console.log(a);
//   }
// }
// aa();

// es6 块级作用域允许声明函数的规则，只在使用大括号的情况下成立，没有使用大括号，就会报错

// "use strict";
// if(true){
//   function f(){}
// }    // 没有问题 es6 下函数声明是在{}内


//只在使用大括号的情况下成立
// "use strict"
// if(true)
// function f(){}

// do 表达式  用于获取块作用域的值  浏览器上无法实现
// function f(){
//   return (Math.random()+5);
// }

// {
//   let t = f();
//   t = t*(t+1)
// }


// let x = do {
//   let t = f();
//   t*(t+1);
// };

// console.log(x);


// const  声明不变的常数变量  不能更改
// 可以在不同的作用域内声明

// const PI = 3.1415926;

// function aa(){
//   const PI = 3.14;
//   console.log(PI);
// }
// console.log(PI);
// aa();


// const 初始化必须给值

// const foo;    // error  const初始化必须给定值


// 与let 相同  在块级作用域中声明 不能再作用域外调用
// if(true){
//   const MAX = 5;
//   console.log(MAX);   // 只在声明的作用域中有效
// }
// console.log(MAX);  // error MAX undefined

// 同let相同不能 声明提前
// console.log(MAX);    //error  MAX  undefined
// const MAX = 500;


// const 声明的常量 也与let一样不可重复声明
// var message = "hello";
// let age = 25;

// const message = "goodbye";  // error message has been declarated
// const age = 30;             // error message has been declarated


// const 本质
// const 本质并不是 const 声明变量的值 不能改变  而是 变量的地址不能改变
// 如下所示 

// const foo = {};
// foo.prop = 123;
// console.log(foo);
// console.log(foo.prop);
// foo.name = "wfy";
// console.log(foo);
// console.log(foo.name);

// foo = {};   // error has been constant

// const a = [];
// a.push("hello");
// console.log(a);
// a.length = 0;
// console.log(a);
// a = ['Dave'];   // error  无法改变



// 对 对象的冻结  Object.freeze(obj)
// "use strict"
// const foo = {};
// foo.name = "wfy";
// foo.age = "25";
// foo.class = "2";

// Object.freeze(foo);

// foo.today = new Date();




// const foo = {};
// foo.name = "wfy";
// foo.age = "25";
// foo.class = "2";
// foo.obj = {};
// foo.obj.company = "jia";

// var constantize = (obj)=>{
//   Object.freeze(obj);
//   Object.keys(obj).forEach((key,i)=>{
//     if(typeof obj[key] === 'object'){
//       constantize(obj[key]);
//     }
//   })
// }

// constantize(foo);



