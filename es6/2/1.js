/*函数参数的解构赋值*/
// function add([x,y]){
//   return x+y;
// }

// console.log( add([1,2]) );


// map是对数组的每一项都进行操作，返回一个新的数组，返回一个新数组
// ([a,b])=>a+b  [a,b] 函数参数的解构  第一次传入的是[1,2]
// let newArr = [[1,2],[3,4]].map(([a,b])=>a+b);
// console.log(newArr);


// 参数指定默认值
// function move({x=0,y=0}={}){
//   return [x,y]
// }

// let m1 = move({x:3,y:8});
// let m2 = move({x:3});
// let m3 = move({y:1});
// let m4 = move();

// console.log(m1,m2,m3,m4);



/*promise*/
// var a = new Promise(function(resolve){
//   setTimeout(function(){
//     resolve(5500)
//   },2000);
// }).then(function(num){
//   console.log("123131313");
//   return num + 55;
// }).then(function(sum){
//   console.log("000000");
//   console.log(sum);
// });


// 变量指定默认值
// function move({x,y}={x:0,y:1}){
//   console.log([x,y]);
// }

// move({x:5,y:6});
// move({x:5});
// move({y:6});
// move();

// let a = [1,undefined,3,5,7].map((x="yes")=>{
//    return x
// });

// console.log(a);


// [(b)] = [3];
// ({p:(d)}={p:55});
// [(parseInt.prop)] = [3];

// console.log(b,d,parseInt.prop);

// es6 冒泡
// let arr = [9,8,5,4,3,1,2,10,88,11,0.2,55];
// for(let i = 0; i < arr.length; i++){
//   for(let j = i+1; j < arr.length; j++){
//     // es6赋值处理
//     console.log(1);
//     arr[i]>arr[j]?[arr[j],arr[i]] = [arr[i],arr[j]]:0;
//   }
// }
// console.log(arr);


// function example(){
//   return [1,2,3];
// }

// var [a,b,c] = example();

// function example1(){
//   return {
//     foo:1,
//     bar:2
//   }
// }

// var {foo,bar} = example1();

// console.log(a,b,c,foo,bar);

// var jsonData = {
//   id:42,
//   status:"ok",
//   data:[876,321]
// }

// let {id,status,data:number}=jsonData;

// console.log(id,status,number);


// var map = new Map();
// //console.log(map);
// map.set("0","hello");
// map.set("1","world");
// //console.log(map);
// for(let [key,val] of map){
//   console.log(key);  // 键
//   console.log(val);  // 值
//   console.log(key,val);  // 键 + 值
// };




