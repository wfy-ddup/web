// 标签模板

// alert`123`;
// alert(456);

// 它可以紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串。

// var a = 5;
// var b = 10;


// 不懂
// tag`hello${a+b}world${a*b}`;
// tag2`hello${a+b}world${a*b}`
// function tag(stringArr,value1,value2){
//   console.log(stringArr,value1,value2);
// }

// function tag2(stringArr,...values){   // valuew = [15,50]   ...values = 15,50
//   console.log(stringArr,values);
// }

// function jc(num){
//   if(num<=1){ return 1 };
//   return num*arguments.callee(num-1);
// }

// var jc5 = jc(5);
// console.log(jc5);


// var a = 5;
// var b = 10;

// function tag(s,v1,v2){
//   console.log(s[0]);
//   console.log(s[1]);
//   console.log(s[2]);
//   console.log(v1);
//   console.log(v2);
// }

// tag`hello${a+b}world${a*b}`;




// 传入的参数与字符模板两回事
// var total = 30;
//var msg = passthru`the total is ${total} (${total*1.5} with tax)`;

// function passthru(literals){
//   console.log(literals);   // arr1 = ["the total is "," ("," with tax"]
//   console.log(arguments);  // [arr1,30,45]
//   var result = '';
//   var i = 0;
//   while(i < literals.length){
//     result += literals[i++];
//     console.log(result);
//     if(i<arguments.length){
//       result += arguments[i];
//       console.log(result);
//     }
//   }
//   return result;
// }

// 这种方法直接将 传入的对象 与 参数分开来
// function passthru(literals,...values){
//   console.log(literals,values);
//   var output = "";
//   for(var index = 0; index < values.length; index++){
//     output += literals[index] +values[index];
//   }
//   output += literals[index];
//   return output;
// }

// console.log(msg);



// 模板的编译  好难

// var name = "jone"
// var message = SaferHTML`<p>${name} has sent you a message.</p>`;

// function SaferHTML(templateData){
//   var s = templateData[0];
//   for(var i = 1; i < arguments.length; i++){
//     var arg = String(arguments[i]);
//     s += arg.replace(/&/g,"&amp").replace(/</g,"&lt").replace(/>/g,"&gt");
//     s += templateData[i];
//   }
//   return s;
// }
// $(".div2")[0].innerHTML = message;
// console.log(message);


// raw 属性
// raw 数组就是与 strings 数组的值完全一样，只不过是raw数组中的字符串里的反斜杠都被转义

// tag`First line\nSecond line`;
// var text1 = 30;
// tag`the total is ${text1} (${text1*1.5} with tax)`;
// function tag(strings){
//   console.log(strings);       // First line Second line
//   console.log(arguments);     
//   console.log(strings.raw[0]);// First line\nSecond line  此处的 \n 会被转义
// }


// String.row()
// es6 为原生的String对象，提供了一个raw方法。
// String.raw() 方法，旺旺用来充当模板字符串的处理函数，返回一个斜杠都被转义(即斜杠前面再加一个斜杠)
console.log(String.raw`hi\n${2+3}`);  // hi\n5;
// 如果元字符串已经被转移
console.log(`hi\u000B`);
console.log(String.raw`hi\u000B`);
console.log(String.raw`hi\\u000B`); // hi\n6;



