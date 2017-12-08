function getBoundingClientRect(element){

        var scrollTop = document.documentElement.scrollTop;
        var scrollLeft = document.documentElement.scrollLeft;

        function getElementBounding(element){
          var actualLeft = element.offsetLeft;
          var actualTop = element.offsetTop;
          var parentElem = element.offsetParent;
          while(parentElem){
            actualLeft += parentElem.offsetLeft;
            actualTop += parentEleme.offsetTop;
            parentElem = parentElem.offsetParent;
          }
          return {
            left : actualLeft,
            top : actualTop
          };
        }

        if(element.getBoundingClientRect){
          if(typeof arguments.callee.offset != 'number'){
            var temp = document.createElement("div");
            temp.style.cssText = "position:absolute;left:0;top:0;";
            document.body.appendChild(temp);
            /*
            书上边的 为什么只加一个scrollTop
            arguments.callee.offset = -temp.getBoundingClientRect().top - scrollTop;
            */
            arguments.callee.offset = temp.getBoundingClientRect();
            document.body.removeChild(temp);
            temp = null;
          }

          var rect = element.getBoundingClientRect();
          var offset = arguments.callee.offset;

          return {
            left : rect.left + (-offset.left),
            right : rect.right + (-offset.left),
            top : rect.top + (-offset.top),
            bottom : rect.bottom + (-offset.top)
          };
        }else{
          var boundingObj = getElementBounding(element);
          return {
            left : boundingObj.left - scrollLeft,
            right : boundingObj.left + element.offsetWidth - scrollLeft,
            top : boundingObj.top - scrollTop,
            bottom : boundingObj.top + element.offsetHeight - scrollTop
          };
        }

      }