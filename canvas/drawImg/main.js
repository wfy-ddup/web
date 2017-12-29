(function(){


    document.getElementById("div-test").innerHTML = 'test';

    // 判断手机
    var isMobile = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent);
    var wh = window.innerHeight||document.body.innerHeight||document.documentElement.innerHeight;
    var ww = window.innerWidth||document.body.innerWidth||document.documentElement.innerWidth;
    var canvas = document.getElementById('canvas');
    canvas.width = ww;
    canvas.height = wh-100;
    var context = canvas.getContext('2d');


    context.lineWidth = 10;
    context.strokeStyle = 'red';
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.shadowBlur = 1;
    context.shadowColor = 'red';


    // 连点成线  用于保存点
    var point = {};
    // 标记是否发生鼠标按下
    var pressed = false;
    // 画布左右的距离
    var left = canvas.getBoundingClientRect().left;
    var top = canvas.getBoundingClientRect().top;
    

    // 定义起点
    function touchstart(e) {

    }

    // 点连成线
    function touchmove(e) {

    }

    canvas.addEventListener('touchstart',touchstart,false);
    canvas.addEventListener('touchmove',touchmove,false);

    function paint(signal) {
      switch(signal) {
        case 1: // 开始路径
          context.beginPath();
          context.moveTo(point.x,point.y);
        case 2:
          context.lineTo(point.x,point.y);
          context.stroke();
          break;
      }
    }

    function create(signal) {
      return function(e) {
        if(signal===1){
          pressed = true
        }

        if(signal === 1 || pressed){
          e = isMobile ? e.touches[0] : e;
          point.x = e.clientX - left + 0.5;
          point.y = e.clientY - top + 0.5;
          paint(signal);
        }
      }
    }

    var start = create(1);
    var move = create(2);

    var requestAnimationFrame = window.requestAnimationFrame;
    var optimizedMove = requestAnimationFrame ? (e) => {
      requestAnimationFrame(() => {
        move(e);
      });
    } : move;

    if(isMobile){
      canvas.addEventListener('touchstart',start,false);
      canvas.addEventListener('touchmove',optimizedMove,false);
    }else{
      canvas.addEventListener('mousedown',start,false);
      canvas.addEventListener('mousemove',optimizedMove,false);
      ['mouseup','mouseleave'].forEach((event) => {
        canvas.addEventListener(event,()=>{
          pressed = false;
        },false);
      });
    }

/*
    var { width, height} = canvas;
    // 左边原点旋转至化部中心
    context.translate(width/2,height/2);
    // 顺时针旋转90°
    context.rotate(90*Math.PI/180);
    context.translate(width/2,-height/2);
*/

    function rotate(degree,image){
      degree = --degree;
      if(degree !== 0){
        var maxDegree = 180;
        var minDegree = -90;

        if(degree > maxDegree){
          degree = maxDegree;
        }else if(degree < minDegree){
          degreee = minDegree
        }

        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');

        var height = images.height;
        var width = images.width;

        var angle = (degree*Math.PI)/180;

        switch(degree){
          case -90:
            canvas.width = height;
            canvas.height = width;
            context.rotate(angle);
            context.drawImage(image, -width, 0);
            break;

          case 90:
            canvas.width = height;
            canvas.height = width;
            context.rotate(angle);
            context.drawImage(image, 0, -height);
            break;

          case 180:
            canvas.width = width;
            canvas.height = height;
            context.rotate(angle);
            context.drawImage(image, -width, -height);
            break;
        }

        image = canvas;
      }

      return image;
    }

    function scale(width,height) {
      var w = canvas.width;
      var h = canvas.height;

      width = width || w;
      height = height || h;

      if(width !== w || height !== h){
        var tmpCanvas = document.createElement('canvas');
        var tmpContext = tmpCanvas.getContext('2d');

        tmpCanvas.width = width;
        tmpCanvas.height = height;
        tmpContext.drawImage(canvas, 0, 0, w, h, 0, 0, width, height);
        canvas = tmpCanvas;
      }

      return canvas;
    }

    
    function getPNGImage() { return canvas.toDataURL('image/png') }


    function dataURLtoBlob(dataURL) {
      var arr = dataURL.split(',');
      var mime = arr[0].match(/:(.*?);/)[1];
      var bStr = window.atob(arr[1]);

      var n = bStr.length;
      var u8arr = new Uint8Array(n);

      while(n--){
        u8arr[n] = bStr.charCodeAt(n);
      }

      return new Blob([u8arr], {type: mime})
    }


    function upload(blob, url, callback) {
      var formData = new FormData();
      var xhr = new XMLHttpRequst();
      xhr.withCredentials = true;

      formData.append('image', blob, 'sign');

      xhr.open('POST', url, true);
      xhr.onload = () => {
        if(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304){
          callback(xhr.responseText);
        }
      };

      xhr.onerror = (e) => {
        console.log(`upload img error: ${e}`);
      };

      xhr.send(formData);
    }


    // var { width, height} = window.getComputedStyle(canvas,null);

    // debugger;

    // width = width.replace('px','');
    // height = height.replace('px','');

    // var devicePixelRatio = window.devicePixelRatio;

    // if(devicePixelRatio){
    //   canvas.style.width = `${width}px`;
    //   cnavas.style.height = `${height}px`;
    //   canvas.height = height*devicePixelRatio;
    //   canvas.width = width*devicePixelRatio;
    //   context.scale(devicePixelRatio,devicePixelRatio);
    // }else{
    //   canvas.width = width;
    //   canvas.height = height;
    // }
  console.log(canvas.width);
  
})();