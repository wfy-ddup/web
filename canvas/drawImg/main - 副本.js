(function(){

    // 判断手机
    const isMobile = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent);
    // let wh = window.innerHeight||document.body.innerHeight||document.documentElement.innerHeight;
    // let ww = window.innerWidth||document.body.innerWidth||document.documentElement.innerWidth;
    const canvas = document.getElementById('canvas');
    // canvas.width = ww;
    // canvas.height = wh-100;
    const context = canvas.getContext('2d');


    context.lineWidth = 10;
    context.strokeStyle = 'red';
    context.lineCap = 'round';
    context.lineJoin = 'round';
    context.shadowBlur = 1;
    context.shadowColor = 'red';


    // 连点成线  用于保存点
    const point = {};
    // 标记是否发生鼠标按下
    let pressed = false;
    // 画布左右的距离
    const  {left,top} = canvas.getBoundingClientRect();
    

    // 定义起点
    const touchstart = (e) => {
    }

    // 点连成线
    const touchmove = (e) => {
    }

    canvas.addEventListener('touchstart',touchstart);
    canvas.addEventListener('touchmove',touchmove);
    
    const paint = (signal) => {
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

    const create = signal => (e) => {
      if(signal === 1) {
        pressed = true;
      }

      if(signal === 1 || pressed) {
        e = isMobile ? e.touches[0] : e;
        point.x = e.clientX - left + 0.5;
        point.y = e.clientY - top + 0.5;
        paint(signal);
      }

      // debugger;
    }

    const start = create(1);
    const move = create(2);

    const requestAnimationFrame = window.requestAnimationFrame;
    const optimizedMove = requestAnimationFrame ? (e) => {
      requestAnimationFrame(() => {
        move(e);
      });
    } : move;

    if(isMobile){
      canvas.addEventListener('touchstart',start);
      canvas.addEventListener('touchmove',optimizedMove);
    }else{
      canvas.addEventListener('mousedown',start);
      canvas.addEventListener('mousemove',optimizedMove);
      ['mouseup','mouseleave'].forEach((event) => {
        canvas.addEventListener(event,()=>{
          pressed = false;
        });
      });
    }

/*
    const { width, height} = canvas;
    // 左边原点旋转至化部中心
    context.translate(width/2,height/2);
    // 顺时针旋转90°
    context.rotate(90*Math.PI/180);
    context.translate(width/2,-height/2);
*/

    const rotate = (degree,image) => {
      degree = ~~degree;
      if(degree !== 0){
        const maxDegree = 180;
        const minDegree = -90;

        if(degree > maxDegree){
          degree = maxDegree;
        }else if(degree < minDegree){
          degreee = minDegree
        }

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        const height = images.height;
        const width = images.width;

        const angle = (degree*Math.PI)/180;

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
    };

    const scale = (width, height) => {
      const w = canvas.width;
      const h = canvas.height;

      width = width || w;
      height = height || h;

      if(width !== w || height !== h){
        const tmpCanvas = document.createElement('canvas');
        const tmpContext = tmpCanvas.getContext('2d');

        tmpCanvas.width = width;
        tmpCanvas.height = height;
        tmpContext.drawImage(canvas, 0, 0, w, h, 0, 0, width, height);
        canvas = tmpCanvas;
      }

      return canvas;
    }

    const getPNGImage = () => {
      return canvas.toDataURL('image/png');
    }


    const dataURLtoBlob = (dataURL) => {
      const arr = dataURL.split(',');
      const mime = arr[0].match(/:(.*?);/)[1];
      const bStr = atob(arr[1]);

      let n = bStr.length;
      const u8arr = new Uint8Array(n);

      while(n--){
        u8arr[n] = bStr.charCodeAt(n);
      }

      return new Blob([u8arr], {type: mime})

    }




    const upload = (blob,url,callback) => {
      const formData = new FormData();
      const xhr = new XMLHttpRequst();
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
    };


    // let { width, height} = window.getComputedStyle(canvas,null);

    // debugger;

    // width = width.replace('px','');
    // height = height.replace('px','');

    // const devicePixelRatio = window.devicePixelRatio;

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