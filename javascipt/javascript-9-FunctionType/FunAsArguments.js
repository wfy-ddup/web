function objArrayArrange(){
  var elem = document.querySelector("#FunAsArguments");
  function createComparisonFunction(propertyName){
    return function(objectOne,objectTwo){
      var value1 = objectOne[propertyName];
      var value2 = objectTwo[propertyName];
      if(value1 < value2){
        return -1;
      }else if(value1 > value2){
        return 1;
      }else{
        return 0;
      }
    }
  }
  var data = [{name:"000",age:26},{name:"wzz",age:32}];
  data.sort(createComparisonFunction("age"));
  elem.innerHTML = JSON.stringify( data );
}
//objArrayArrange();
