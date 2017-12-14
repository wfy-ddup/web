/**
 * es6 函数的扩展 
 */


// es5
// 如果给y的赋值转化为boolean类型为false，y同样是用的默认值
// function log1(x,y){
//   y = y||'world';
//   console.log(x,y);
// }

// log1('hello');          // hello world
// log1('hello','china');  // hello china
// log1('hello','');       // hello world    '' 被转义为 false
// log1('hello',false);   // hello world


// se6
// function log2(x,y='world'){
//   console.log(x,y);
// }

// log2('hello');  // hello world
// log2('hello',''); // hello    因为对y赋值了  只是值为空
// log2('hello',false);   // hello false   这里也对y赋值了 为false


// 初始赋值
// 如果没有给x y 赋值  则xy的初始值为0
// function Point(x=0,y=0){    
//   this.x = x;
//   this.y = y;
// }
// var p = new Point();





// 与解构赋值默认值组合使用
// function foo1({x,y=5}){
//   console.log(x,y);
// }

// foo1({});     // undefined  5    5为默认值 在解构赋值时没有给任何值
// foo1({x:1});  // 1 5             5为默认值 在解构赋值时只有一个值x
// foo1({x:1,y:2});  // 1 2         进行了解构赋值
// foo1();       // error    参数至少得传一个空对象       


// 这里的变量默认赋值 与 默认传参
// function foo2({x,y=5}={}){
//   console.log(x,y);
// }

// foo2();  // undefined 5    默认传了一个空对象作为参数


// function fetch(url,{body='',method='GET',headers={}}={}){
//   console.log(body,method,headers);
// }

// fetch('http://example.com',{headers:{o:5}});
// fetch('http://exanple.com');


// 默认参数 并进行赋值

// function m1({x=0,y=0}={}){
//   return [x,y];
// }

// function m2({x,y}={x:0,y:0}){
//   return [x,y];
// }

// console.log( m2() );  // [0,0]
// console.log( m1() );  // [0,0]
// console.log( m2({x:3,y:8}) );   // [3,8]
// console.log( m1({x:4,y:7}) );   // [4,7]



// undefined !== null ,只有变量为 undefined 才会赋值为默认值，为null时不会赋值为默认值
// function f(x,y=5,z){
//   console.log([x,y,z]);
// }

// f(1,undefined,2);      // [1,5,2]
// f(1,null,2);           // [1,null,2]
// f();                   // [undefined,5,undefined]


//函数的length属性  返回没有指定默认值的参数个数
// var len = (function(a,b=5,c){}).length;
// console.log(len);



// 作用域
// 如果参数默认值是一个变量，则该变量所处的作用，与其他变量的作用域规则是一样的，当前函数的作用域，然后是全局作用域


// 注意这种写法
// x=5 在局部变量中已经声明,所以y=x才不会 报错
// function f(x=5,y=x){
//   console.log(x+y);
// }

// f(10,2);
// f();


// function o(x=y,y=0){
//   console.log(x+y);
// }

// o();    // 报错，y没有 声明
// o(5,2);    // 7


// es5 函数的调用
// var aa = "aaa";
// function log(){
//   console.log(aa);
// }

// function bar(log){
//   var aa = "bbb";
//   log();
// }

// bar(log);

// let foo = 'outer';
// function bar1(func = x => foo){
//   let foo = 'inner';
//   console.log(func());
// }
// bar1();


// let foo = "outer";
// let f = x => foo;

// function bar(func=f){
//   let foo = "inner";
//   console.log(func());
// }
// bar();   // outer;

// function throwIfMissing(){
//   throw new Error("必须传入参数");
// }

// function foo(mustBeProvided=throwIfMissing()){
//   return mustBeProvided;
// }
// foo();
// foo(656);



// rest 参数 (...变量名)，这样就不需要使用arguments对象了，
// rest 搭配参数 是一个数组 , 如果是数组则会再加一层数组


// function add(...values){
//   console.log(values);
//   let sum = 0;
//   for(let val of values){
//     sum += val;
//   }
//   return sum;
// }

// console.log( add(1,2,3,4,5,6,7,8,9) );
// console.log( add(...[2,3,4,5,6,7,8,9]) );  // 对于上述函数有问题



// const sortNumbers = (...numbers) => {
//   numbers.sort(
//     (val1,val2)=>{
//       return val1<val2?-1:1;
//     }
//   );
//   return numbers;
// }

// let arr = sortNumbers(5,2,8,4,6,1,3,7,9,0,12,11,23,89,13);
// console.log(arr);

// let push = ([array,...items])=>{
//   items.forEach(item=>{ array.push(item); });
//   console.log(array);
// }
// push( [[],5,8,9,2,1,4,36,7] );






