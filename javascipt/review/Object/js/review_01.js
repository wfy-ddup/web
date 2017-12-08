
function simplesetObj(){
  var person = new Object();
  person.name = "nicholas";
  person.sayName = function(){alert(this.name)}
}

var person01 = { 
  name : "nicholas",
  sayName : function(){alert(this.name);}
}

/*设置属性对象*/
var person02 = {}
Object.defineProperty(person02,"name",{
  writable : false,
  value : "nicholas"
})

function creatFlag(){
  var pos = [0,15,30,45]
  var MB = document.getElementById("main_box");
  var flag = document.createDocumentFragment();
  for(var i = 0;i < 4; i++){
    var cell = document.createElement('div');
    cell.className = "eachCell";
    cell.style.top = pos[i] + "px";
    flag.appendChild(cell);
  }
  MB.appendChild(flag);
}
creatFlag();