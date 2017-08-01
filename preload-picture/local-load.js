/*按图片的张数进行预加载*/

var imgsUrl = ["images/bg_01.jpg", "http://img1.gtimg.com/gamezone/pics/14806/14806970.jpg", "images/code_01.jpg", "images/red_pack_1.png", "images/red_pack_2.png", "images/red_pack_3.png", "images/red_pack_4.png", "images/red_pack_5.png", "images/login_bg.jpg"],
loadImgsFun = [],
prograss = 0,
eachStep = 100 / imgsUrl.length,
Browser = new Object();
Browser.userAgent = window.navigator.userAgent.toLowerCase();
Browser.ie = /msie/.test(Browser.userAgent);
Browser.Moz = /gecko/.test(Browser.userAgent);
for (var i = 0; i < imgsUrl.length; i++) {
  loadImgsFun[i] = function(i) {
    return function() {
      var img = new Image();
      img.src = imgsUrl[i];
      if (Browser.ie) {
        img.onreadystatechange = function() {
          if (img.readyState == "complete" || img.readyState == "loaded") {
            calcWidth()
          }
        }
      } else if (Browser.Moz) {
        img.onload = function(event) {
          if (img.complete == true) {
            calcWidth()
          }
        }
      }
    }
  } (i);
}
function calcWidth() {
  prograss += eachStep;
  document.getElementById("prograss").style.width = prograss.toFixed(2) + "%";
  document.getElementById("prograss").innerHTML = prograss.toFixed(2) + "%";
  if (prograss >= 100) {
    var photoWall = document.getElementById("photo");
    Array.prototype.slice.call(photoWall.childNodes).forEach(function(item, index) {
      item.tagName == 'IMG' ? item.setAttribute("src", item.getAttribute("_src")) : 0;
    });
    photoWall.style.display = "block";
  }
}
function starLoad() {
  for (var n = 0; n < loadImgsFun.length; n++) {
    loadImgsFun[n]();
  }
}
starLoad();
