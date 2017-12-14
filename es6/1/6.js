/*对象的解构赋值*/

// let {foo,bar} = {foo:"aaa",bar:"bbb"}
// console.log(foo,bar);

// let {bar,foo} = {foo:"aaa",bar:"bbb"};
// console.log(bar,foo);

// let {baz} = {foo:"aaa",bar:"bbb"};
// console.log(baz);   // undefined


// 变量名不一致的是
// let obj = {first:"hello",last:"world"};
// let {first:f,last:l} = obj;
// console.log(f,l);

// 实际上解构赋值是下边形式

// let {foo:foo,bar:bar} = {foo:"aaa",bar:"bbb"};

// let {foo:baz} = {foo:"aaa",bar:"bbb"};

// console.log(foo,bar,baz);

// let obj = {
//   p:["hello",{y:"world"}]
// };

// let {p,p:[x,{y:w}]} = obj;
// console.log(w,x,p);

// let node = {
//   loc:{
//     start:{
//       line:1,
//       column:1
//     }
//   }
// };

// let {loc:l,loc:{start:s},loc:{start:{line:h}}} = node;
// console.log(h,s,l);


// let obj = {};
// let arr = [];

// ({foo:obj,prop,bar:arr[0]} = {foo:123,bar:true});
// console.log(obj,arr);


// 初始化赋值
// let {x1=3} = {};
// console.log(x1);
// let {x2,y1=5} = {x2:10}
// console.log(x2);
// let {x3:y2=3} = {};
// console.log(y2);
// let {x4:y3=3} = {x4:5};
// console.log(y3);

// let {x1:x1=3}={x1:undefined};
// let {x2:x2=3}={x2:null}

// null 在严格模式下不等于undefined 所以导致x2的默认值无法生效
// console.log(x1,x2);

// let x ;
// {x} = {x:1};   // error
// ({x} = {x:1});
// console.log(x);

// let {log,sin,cos} = Math;
// console.log(log(45),sin(45),cos(45));


// 数组本是特殊的对象，因此可以对数组进行对象属性的解构
// let arr = [12,3,5];
// let {0:first,[arr.length-1]:last} = arr;
// console.log(first,last);




// 字符串的解构赋值
// const [a,b,c,d,e] = "hello";
// console.log(a,b,c,d,e);


// length 是对象的属性
// let {length: len} = "hello";
// console.log(len);
