var EventUtil = {
    addHandler: function(element, type, handler) {
        // 此处的handler函数需要单独提出来写
        if (element.addEventListener) {
            //DOM2 ie11 非ie11-
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            //DOM2 ie10-
            element.attachEvent("on" + type, handler);
        } else {
            //DOM0 ie
            element["on" + type] = handler;
        }
    },
    removeHandler: function(element, type, handler) {
        // 此处的handler函数需要单独提出来写
        if (element.removeEventListener) {
            element.removeEventListener(type, handler);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler)
        } else {
            element["on" + type] = null;
        }
    },
    getRelatedTarget: function(event) {
        var e = event || window.event;
        if (e.relatedTarget) { //非ie8
            return e.relatedTarget;
        } else if (e.toElement) { //mouseout事件触发时，ietoElement属性保存想过元素
            return e.toElement;
        } else if (e.fromElement) { //mouseover事件触发时，iefromElement属性中保留相关元素
            return e.fromElement;
        } else {
            return null;
        }
    },
    getEvent: function(event) {
        return event || window.event
    },
    getTarget: function(event) {
        var e = window.event || event;
        return e.srcElement || e.target;
    },
    preventDefault: function(event) {
        var e = event || window.event;
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }
    },
    stopPropagation: function(event) {
        var e = event || window.event;
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    },
    getCharCode: function(event){
        if(typeof event.charCode == "number"){
            return event.charCode;
        }else{
            return event.keyCode;
        }
    },
    getButton: function(event){
        if(document.implementation.hasFeature("MouseEvents","2.0")){
            return event.button
        }else{
            switch(event.button){
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    }
}