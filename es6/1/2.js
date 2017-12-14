// 变量的解析赋值


// 只要等号两端的模式相同，左边的变量就会被赋值对应的值
// var a = 1;
// var b = 2;
// var c = 3;

// var [a,b,c] = [4,56,6];

// console.log(a,b,c);   // 4,56,6

// let [foo,[[bar],baz]] = [1,[[2],3]];
// console.log(foo,bar,baz);  // 1,2,3

// let [,,third] = ["foo","bar","baz"];
// console.log(third);   // baz

// let[x,,y] = [1,2,3];
// console.log(x,y);   //1,3

// let [head,...tail] = [1,2,3,4];
// console.log(head,tail);  // 1   [2,3,4]


// 一一对应的数组，...开头,解构成数组
// let [x,y,...z] = ['a'];
// console.log(x,y,z);  // 'a' undefined []

// var [foo] = [];
// var [bar,zoo] = [1];
// console.log(foo,bar,zoo);

// 解构 左边的变量名 必须与右边的相对应 ，且右边相对应的数组必须有值，否则结构后左边的变量可能为undefined，如果左边没有变量与之相对应，则用逗号隔开，在对应的情况下，右侧的值可以比左侧多
// let [x,y] = [1,2,3];
// console.log(x,y);
// let [a,[b],c] = [1,[2,3],4];
// console.log(a,b,c);
// let [e,[f,g],h] = [5,[6,7],8];
// console.log(e,f,g,h);

// set结构
// let [x,y,z] = new Set(["a","b","c"]);
// console.log(x,y,z);


// function* 是一个
// function* fibs(){
//   var a = 0;
//   var b = 1;
//   while(true){
//     yield a;   // 0  1  1  2  3  5
//     //console.log(a);
//     [a,b] = [b,a+b]
//   }
// }

//var [first,second,third,fifth,sixth,next] = fibs();
//console.log(first,second,third,fifth,sixth,next);
//           0，   1       1      


// var gen = fibs();
// for(let i =0; i < 10; i++){
//   console.log(gen.next().value);
// }


// 结构赋值 允许指定默认值,如果右侧没有值，则为默认值

// var [foo = true] = [];
// console.log(foo);
// let [x,y="b"]=["a"];
// let [w,z='c'] = ["a",undefined];
// console.log(w,z);



// 在严格模式下，如果右侧的值不为undefined 则变量的默认值不能赋值
// 在严格模式下，当变量为undefined时才能赋值为默认值
// 因为严格模式下运算使用===判断一个位置是否有值
// "use strict"
// var [x=1] = [undefined];

// var [y = true] = [null];

// console.log(x,y);

// function f(){
//   console.log('aaa');
// }
// let [x = f()] = [1];  // x 有值 不会是默认值



// let x;
// if([1][0] === undefined){  // [1][0] === undefined
//   x = f();
// }else{
//   x=[1][0]
// }
// console.log(x)

// let [z] = [0][1];
// console.log(z);