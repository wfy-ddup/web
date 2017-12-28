var prevData = [],
    nowData = [],
    count = 11000;

for(var n = 0; n < count; n++){
  var obj = {};
  obj.name = "name"+n;
  if( n < (count/2) ){ prevData.push(obj); }
  nowData.push(obj);
}

var steps = 0;
var len1 = prevData.length,
    len2 = nowData.length;

var compare = function(){ return Math.random()<=0.5 ? -1 : 1; }

nowData.sort(compare);
prevData.sort(compare);


/**
 * 递归尾调用 优化  避免栈溢出
 */
function deleteSome(){
  if( len1 == 0 ){  return }
  for(var i = 0; i < len1; i++){
    for(var c = 0; c < len2; c++){    
      if(prevData[i].name === nowData[c].name){
        prevData.splice(i,1);
        nowData.splice(c,1);
        len1 -=1;
        len2 -=1;   
        deleteSome();
        return;
      } 
      steps++
    }
  }
}


var star =  Date.now() ;

deleteSome(); 

console.log( Date.now() - star );

console.log(nowData);