// 数组的赋值
// function add([x,y]){
//   return x+y;
// }
// console.log(add([5,10]));

// let testArr = [[1,5],[5,8]];
// let newArr = testArr.map( ([a,b])=>{return a+b} );

// console.log(newArr);

// // 有初始化赋值
// function move({x = 0,y =0}={}){
//   return [x,y]
// }
// console.log(
//   move({x:3,y:5}),
//   move({x:15,y:20}),
//   move({x:25})
// );
// // 没有初始化赋值，但是有第一次赋值
// // 在第二次赋值的时候，将第一次赋值覆盖
// function move2({x,y}={x:0,y:0}){
//   return [x,y];
// }

// console.log(
//   move2({x:1,y:2}),
//   move2({x:2}),
//   move2({y:3}),
//   move2({})
// );

// var arr = [1,undefined,3];
// var newArr = arr.map((x='yes')=>x);
// console.log(newArr);


// 圆括号的使用


// 全部错误
// 变量声明的时候不要 圆括号

// var [(a)] = [1];
// var {x:(c)} = {};
// var ({x:c}) = {};
// var {(x:c)} = {};
// var {(x):c} = {};

// var {o:({p:p})} = {o:{p:2}};


// 报错，函数参数也属于变量声明
// function f([(z)]){
//   return z;
// }
// console.log(f([2]));

// 全部报错

// [({p:a}),{x:c}] = [{},{}]  // error  圆括号错误


// 正确的用法
// let b;
// [(b)] = [3];
// let c;
// ({p:(c)} = {p:3});
// [(parseInt.prop)] = [3];


// 变量的解析赋值的用途
// let x = 5;
// let y = 10;
// ([x,y] = [y,x]);

// console.log(x,y);

// let arr = [2,5,6,4,10,1,32,5,47,21,22,85,96,69,31,10,0.2,25];

// for(let a = 0; a < arr.length; a++){

//   for(let i = 0; i < arr.length-a; i++){
//     if(arr[i]>arr[i+1]){
//       let sum = arr[i] +arr[i+1];

//       arr[i+1] = sum - arr[i+1];
//       arr[i] = sum - arr[i+1];
//     }
//   }

// }

// console.log(arr);



// json 数据的赋值
// var jsonData = {
//   id: 42,
//   status: 'ok',
//   data: [899,1000]
// }
// let data = 10000;
// let {id,status,data:number} = jsonData;

// console.log(id,status,number);


