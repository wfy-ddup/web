/*一张图片异步进行加载，百分比随着图片的加载进度而来*/
var s = {
  s.loadFinished = true
},
loading = {
  if (s.loadFinished) {
    return false
  }
  var xhr = createXHR(),
  ltE = document.querySelector(".left_rotate"),
  rtE = document.querySelector(".right_rotate"),
  divStauts = document.getElementById("center_num"),
  progress = '',
  lt = 0,
  rt = 0;
  xhr.onload = function(event) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {} else {}
  }
  xhr.onprogress = function(event) {
    if (event.lengthComputable) {
      progress = Math.round(100 * event.loaded / event.total);
      divStauts.innerHTML = progress + "%";
      lt = progress / 100 * 360;
      rt = lt - 180;
      if (rt <= 0) {
        rtE.style.transform = "rotateZ(" + (lt) + "deg)";
      } else {
        rtE.style.transform = "rotateZ(180deg)";
        ltE.style.transform = "rotateZ(" + (rt) + "deg)";
      }
      if (progress == 100) {
        s.loadFinished = true;
        document.getElementById("loading").style.display = "none";
      }
    }
  }
  function createXHR() {
    var xhr = null;
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xhr;
  }
  url = 'http://127.0.0.1/Company/%E5%BE%AE%E4%BF%A1%E7%BA%A2%E5%8C%85%E5%A2%99/PC/images/bg_01.jpg';
  xhr.open('get', url, true);
  xhr.send(null);
},

