/*字符的Unicode表示法*/

// String.fromCharCode(0x20BB7); // 用于从码点返回对应的字符

// String.fromCodePoint(0x78,0x1f680,0x79);  // 

// console.log(
//   String.fromCharCode(0x20BB2),
//   String.fromCodePoint(0x78,0x1f680,0x79)
// );


// 字符串遍历接口

// for(let codePoint of "foo"){
//   console.log(codePoint);
// }

// var text = String.fromCodePoint(0x20BB7);
// console.log(text);
// for(let i = 0; i < text.length; i++){
//   console.log(text[i]);
// }

/*
  normalize():
*/
function fn(){
  return "hello world";
}

var list = $(".item_li");
var basket={
  count:1000,
  onSale:"wfw",
  x:5,
  y:10
};


var [x,y] = [10,15];

list[0].innerHTML=`模板字符串的变量<br>There are <b>${basket.count}</b> items in your basket, <em>${basket.onSale}</em> are on sale!`;

list[1].innerHTML = `模板字符串的运算<br>${x}+${y}=${x+y}<br>${basket.x}+${basket.y}=${basket.x+basket.y}<br>${x}x${y}=${x*y}<br>${basket.x}x${basket.y}=${basket.x*basket.y}`;
list[2].innerHTML = `模板字符串中调用函数<br />${fn()}`;


var addrs = [
  {
    name:"123",
    loc:"hefei",
    age:"15"
  },{
    name:"234",
    loc:"anqing",
    age:"16"
  },{
    name:"345",
    loc:"chaohu",
    age:"17"
  },{
    name:"456",
    loc:"chuzhou",
    age:"18"
  },{
    name:"567",
    loc:"huainan",
    age:"19"
  },{
    name:"678",
    loc:"huanbei",
    age:"20"
  },{
    name:"789",
    loc:"bazhou",
    age:"21"
  }
];
// var txt = '';
// function joinTxt(addrs){
//   addrs.map(function(item,index){
//     txt+=`<tr><td>${item.name}</td><td>${item.loc}</td><td>${item.age}</td></tr>`;
//   });
// }
// joinTxt(addrs);
// console.log($(".tbody_01"));
// $(".tbody_01")[0].innerHTML = txt;

let templ = addrs => `
  ${addrs.map(addrs=>`
    <tr>
      <td>${addrs.name}</td>
      <td>${addrs.loc}</td>
      <td>${addrs.age}</td>
    </tr>
  `).join('')}
`;

$(".tbody_01")[0].innerHTML = templ(addrs);