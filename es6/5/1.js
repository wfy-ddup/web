// 箭头函数
// => 定义函数

// var f = v => v;
// function f(v){
//   return v;
// }

// var f1 = function(){return 5};    // 这个函数没有执行
// var f2 = () => 5;
// console.log(f1(),f2());



// var sum = (num1,num2) => num1 + nums;
// let sumLen = (len) => {
//   let sum = 0;
//   len = parseInt(len);
//   Array.from({length:len>1?len:1},(x,index)=>index+1).forEach(x=>sum+=x);
//   return sum;
// }

// let sum100 = sumLen(100);



// 箭头函数返回一个对象,需要用一个括号将 代码块包裹起来

// var sum = (id,name) => ({id:id,name:name});
// var obj = sum(5,'www');
// console.log(obj);






/**
 * 箭头函数
 * 函数特内的this对象，就是定义是所在的对象
 * 不可以当作构造函数来使用
 * 不可以使用arguments对象
 * 不能使用yield命令
 */


// 箭头函数与变量解构结合使用

// const full = ({first,last}) => first+' '+last;
// let str = full({first:'w',last:5});
// console.log(str);


// const numbers = (...nums) => nums;
// var arr1 = numbers(1,2,3,4,5,6,7);
// console.log(arr1);
// console.log(Array.of(1,2,3,4,5,6,7));

// const firstAndLast = (first,...last) => ([first,last]);
// const handAndTail = ([first,...last]) => ([first,last]);
// var arr1 = firstAndLast(1,2,3,4,5,6);
// var arr2 = handAndTail([1,2,3,4,5,6]);
// console.log(arr1,arr2);


// s2 在window中


// var s2 = 15;
// function Timer(){
//   this.s1 = 10;
//   this.s2 = 5;
//   setInterval(()=>this.s1++,1000);
//   setInterval(function(){
//     console.log(this);
//     this.s2++
//   },1000);
// }

// var timer = new Timer();

// setTimeout(()=>console.log('s1:',timer.s1),3100);
// setTimeout(()=>console.log('s2:',timer.s2),3100);
// setTimeout(()=>console.log('window-s2:',s2),3100);




/**
 * 箭头函数没有this，this时外层代码块的this，也不能作为构造函数
 */
// this 对象的指向
// var handler = {
//   id:'123456',
//   init:function(){
//     document.addEventListener('click',event=>this.doSomething(event.type),false);
//   },
//   doSomething:function(type){
//     console.log('Handling '+type+' for '+this.id);
//   }
// }

// handler.init();


// function foo(){
//   return ()=>{
//     return ()=>{
//       return ()=>{
//         console.log('id:',this.id);
//       }
//     }
//   }
// }

// var obj = {id:101};

// var f = foo.call(obj);
// var t1 = f.call({id:102})()();  // 101  箭头函数没有this，无法进行重新绑定
// var t2 = f().call({id:103})();  // 101  箭头函数没有this，无法进行重新绑定
// var t3 = f()().call({id:104});  // 101  箭头函数没有this，无法进行重新绑定



/**
 * es6 
 */
// var obj = {
//   name:"wfy"
// }
// function foo(){
//   console.log(this.name);
// }
// // foo::obj();    // es7 的绑定 浏览器不支持
// foo.bind(obj)();




// 尾调用优化
// 函数在调用时 会形成一个调用帧，保存着调用位置和变量等信息，如果在函数A内部再调用函数B,那么在A的调用帧上方还会形成一个B的调用帧，等到B运行结束，将结果返回到A，B的调用才会消失。
// 如果 内层函数没有引用外层函数的变量 外层函数的调用帧不会保留  因为外层函数调用帧中的信息 不会再用到
// 调用帧 就是 内存
// 
// 指某个函数的最后一步是调用另一个函数
// function re(){
//   console.log("尾调用返回的");
// }

// function fn1(){
//   return re()
// }

// fn1();

// function g([x=0,y=0]){
//   console.log(x+y);
// }

// function f(){
//   return g([5,3]);
// }

// f();


// 只有不在用到外层函数的内部变量，内层函数的调用帧才会取代外层函数的调用帧，否则就无法进行 尾调用优化
//  这个函数不属于 尾调优化 因为内层函数使用了外层函数的变量 所以外层函数无法取代内层函数的调用帧
// function addone(){
//   var one = 1;
//   function inner(b){
//     console.log(b+one);   // 内层函数继续引用着外层函数调用帧中的变量
//   }
//   return inner(5);
// }
// addone();

// 这个属于尾调优化
// 内层函数没有应用外层函数的变量
// function callInsideFun(){
//   let aa = "aa";
//   function insideFun(){
//     console.log("我没有调用外层函数");
//   }
//   return insideFun();
// }

// callInsideFun();


// 尾递归
// 函数调用自身称为递归  在尾调用 就称为尾递归
// 递归的两种写法


// 这种写法不严格  容易造成栈溢出
// function factorial(n){
//   if(n<=0){return}
//   if(n===1){return 1}
//   return n*factorial(n-1);
// }
// var num5 = factorial(5);
// console.log(num5);
// var newFun1 = factorial;
// console.log(newFun1(6));

// function factorialOne(n){
//   if(n<=1){return 1}
//   return n+arguments.callee(n-1);
// }

// var newFun2 = factorialOne;
// var star = new Date().getTime();
// console.log(newFun2(15000));
// console.log(new Date().getTime()-star);



// 递归尾调用 避免 栈溢出
// 函数内部调用函数，避免内部函数引用外部函数的变量而无法达到递归尾调用的效果，可以将内部函数引用的外部函数变量作为参数传递到内层函数，从而不影响递归尾调用
// function factorialTwo(n,total){
//   if(n===1){ return total }
//   return factorialTwo(n-1,n+total)
// }
// var starTwo = new Date().getTime();
// console.log(factorialTwo(15000,1));
// console.log(new Date().getTime()-starTwo);


// 蹦床函数
/**
 * while 循环
 */
// function whileFun(num){
//   var sum = 0;
//   while(num>0){
//     sum += num;
//     num--;
//   }
//   return sum;
// }
// console.log(whileFun(50));


// 再利用尾递归优化时，当递归数量达到 100000 次时就会栈溢出


// 这个函数  直接在  蹦床函数中使用  会造成栈溢出
// 此时需要将其改为  返回另外一个函数
// function sum(x=1,y){
//   if(y>0){
//     return sum(x+1,y-1);
//   }else{
//     return x;
//   }
// }
// 
function sum(x=1,y){
  if(y>0){
    return sum.bind(null,x+1,y-1);
  }else{
    return x;
  }
}
//var total = sum(1,100000);   // 报错 栈溢出

// 蹦床函数
function trampoline(f){
  while(f && f instanceof Function){
    f = f();
  }
  return f;
}

var total = trampoline(sum(1,10000000));
console.log(total);

/**
 * apply(this,[arguments]); 参数有问题
 * var total = trampoline(sum(1,5));
console.log(total);


function test01(x,y){
  console.log(x+y);
}

function argu(x,y){
  test01.apply(this,[arguments]);
}

argu(5,3);
 */






























