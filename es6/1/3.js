// 对象的解构赋值


// 数组的解析赋值，是按照次序来的，而对象是没有次序的
// var {foo,bar} = {foo:"aaa",bar:"bbb"};
// console.log(foo,bar);

// var {baz} = {baa:"0000",baz:"555"};
// console.log(baz); 

// var {foo:baz} = {foo:"aaa",bar:"bbb"};
// 声明的变量名     已知对象的属性名
// console.log(baz);
// console.log(foo);


// 如果声明的变量名 不一样
// 声明的时候赋值，提前声明再赋值不行
// let foo = 555;
//let taz ;
// let {foo:baz} = {foo:"aaa",bar:"bbb"};
// console.log(baz);


// let {foo:taz} = {foo:"aba",bac:"ded"};
// console.log(taz);

// 对象的解构赋值的内部机制，先找到同名属性，然后再付给对应的变量，真正复制的是后者，而不是前者

// let {foo:baz} = {foo:"ccc",bar:"bbb"};    // let 声明的是baz 二foo其实是为了找相同属性名下的值
// console.log(baz);


// let foo;
// {foo} = {foo:1};         // 报错  foo has ben declaraed
// let baz;                 
// let {bar:baz} = {bar:1};    // 重复声明 
// console.log(foo);       // 报错

// let foo;
// ({foo} = {foo:1});
// let baz;
// ({bar:baz} = {bar:1});

// console.log(baz);
// console.log(foo);


// 和数组一样，解构也可以用于嵌套解构的对象

// var obj = {
//   p:[
//     'hello',
//     {y:'world'}
//   ]
// };

// var {p:[x,{y}]} = obj;
// // console.log(p);  p 是没有声明的，只是个模式
// console.log(x,y);

// // 注意p 是个模式，不是个变量，因此不会被赋值

// var node = {
//   loc:{
//     start:{
//       line: 1,
//       column: 5
//     }
//   }
// }

// var {loc:{start:{line,column}}} = node;

// console.log(line,column);

// console.log(loc,start);   // error loc start 只是个模式，不是声明的变量 loc is no defined

// let obj = {};
// let arr = [];

// // 给数组对象的赋值

// ({foo:obj.prop,bar:arr[0]} = {foo:123,bar:true});
// console.log(obj,arr)


// let {z=3} = {};
// let {x,y=5} = {x:10,y:15};
// console.log(x,y,z);  //10 15 3
// let {message:msg="somethis went wrong"} = {}
// console.log(msg)    // somethis went wrong


// 默认值生效的条件是，对象的属性值严格等于 undefined

// var {x = 3} = {x: undefined};
// var {y = 5} = {y: null};
// console.log(x,y); //y null

// var {foo} = {baz:"aaa"};  // 解析不成功没有属性名
// console.log(foo);


// var {baz: bar} = {baz:'baz'};
// console.log(bar);

// let {log,sin,con} = Math;
// console.log(sin(45));



