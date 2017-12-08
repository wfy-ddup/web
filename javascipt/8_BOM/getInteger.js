function getInt(num){ 
  num = parseInt(num);
  var winW = num/20 ;
  var floatNum = winW - parseInt(winW) ;
  var reduce = 0;
  parseInt(winW) % 2 == 1 ? reduce = 1 : 0;
  console.log(parseInt(winW));
  console.log(reduce);
}

getInt('412');
