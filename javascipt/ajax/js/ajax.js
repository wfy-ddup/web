// 参数转义
function addURLParam(url,name,value){
  url += (url.indexOf("?") == -1 ? "?" : "&");
  url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
  return url;
}


//常见ajax
function createXHR(){
  var xhr = null;
  if(window.XMLHttpRequest){
    xhr = new XMLHttpRequest;
  }else{
    xhr = new ActiveXObject("Microsoft.XMLHTTP")
  }
  return xhr;
}

function ajGet1(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){

    if(xhr.readyState == 4){

      if( (xhr.status>=200&&xhr.status<300)||xhr.status==304 ){
        console.log(xhr.responseText);
      }else{
        console.log("Request was unsuccessful:" + xhr.status);
      }

    }
  };
  xhr.open("get","data/data.txt",true);
  xhr.setRequestHeader("myHeader","myValue");
  xhr.send(null);
}

//ajGet1();  get
function ajGet2(){
  var url = "data/data.php",
      name = "wfy",
      value = "18";

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){

    if(xhr.readyState == 4){

      if( (xhr.status>=200&&xhr.status<300)||xhr.status==304 ){
        console.log(xhr.responseText);
      }else{
        console.log("Request was unsuccessful:" + xhr.status);
      }

    }
  };
  xhr.open("get",addURLParam(url,name,value),true);
  xhr.send(null);
}

//ajGet2();  post
function submitData(){
  var userName = document.getElementById("user-name").value,
      userEmail = document.getElementById("user-email").value;
  var msg ="user-name="+encodeURIComponent(userName)+"&user-email="+encodeURIComponent(userEmail);
  var xhr = createXHR();
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
      if((xhr.status >= 200 && xhr.status < 300)||xhr.status == 304){
        var resData = xhr.responseText;
        document.getElementById("test01").innerHTML = resData;
      }else{
        console.log("请求出错");
      }
    }
  };
  xhr.open("post","data/data2.php",true);
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  xhr.send(msg);
}