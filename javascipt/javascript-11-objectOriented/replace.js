
var txt = "之一------(函数的劫持与对象的复制)
关于对象的继承，一般的做法是用复制法： Object.extend 
见protpotype.js 的实现方法:

Object.extend = function(destination, source) ...{  
  for (property in source) ...{  
    destination[property] = source[property];  
  }  
  return destination;  
} 
除此以外，还有一种不太常见的方法：  Function.apply. 
apply 方法能劫持(<<Ajax in Action>> 书中用到"劫持"一语，很生动啊)另外一个对象的方法， 
继承另外一个对象的属性。 
示范代码如下： 
Apply示范代码

<script>  
function Person(name,age)...{   //定义一个类，人类   
    this.name=name     //名字   
    this.age=age       //年龄  
    this.sayhello=function()...{alert("hello")}  
}  
function Print()...{            //显示类的属性  
    this.funcName="Print"  
    this.show=function()...{       
        var msg=[]  
        for(var key in this)...{  
            if (typeof(this[key])!="function") msg.push([key,":",this[key]].join(""))  
        }  
        alert(msg.join(" "))  
    }  
}  
function Student(name,age,grade,school)...{    //学生类  
    Person.apply(this,arguments)  
    Print.apply(this,arguments)  
    this.grade=grade                  //年级  
    this.school=school                    //学校  
}  
var p1=new Person("jake",10)  
p1.sayhello()  
var s1=new Student("tom",13,6,"清华小学")  
s1.show()  
s1.sayhello()  
alert(s1.funcName)  
</script> 
学生类本来不具备任何方法，但是在 Person.apply(this,arguments)  后，他就具备了 Person类的sayhello方法和 所有属性。  在 Print.apply(this,arguments) 后就自动得到了  show() 方法。

本文，作为抛砖引玉，只对 apply 的用法(在对象继承和函数劫持方面)做个小示范，其他更深入的应用要 
靠大家慢慢去领会了。

之二------利用Apply的参数数组化来提高

我们再来聊聊Function.apply() 在提升程序性能方面的技巧。

我们先从 Math.max() 函数说起，  Math.max后面可以接任意个参数，最后返回所有参数中的最大值。

比如  
alert(Math.max(5,8))   //8
alert(Math.max(5,7,9,3,1,6))   //9

但是在很多情况下，我们需要找出数组中最大的元素。
var arr=[5,7,9,1]
alert(Math.max(arr))    //   这样却是不行的。一定要这样写

function getMax(arr){
    var arrLen=arr.length;
    for(var i=0,ret=arr[0];i<arrLen;i++){
        ret=Math.max(ret,arr[i]);        
    }
    return ret;
}
这样写麻烦而且低效。如果用 apply呢，看代码：
function getMax2(arr){
    return Math.max.apply(null,arr)
}
两段代码达到了同样的目的，但是getMax2却优雅，高效，简洁得多。

看性能测试:
getMax性能测试

<script>
var myArr=new Array()

function fillRnd(arrLen){  //填入 arrLen个1-10的随机数字到数组
    for(var i=0,arr=[];i<arrLen;i++){
        arr[i]=Math.ceil(Math.random()*10)
    }
    return arr
}

function getMax(arr){
    var arrLen=arr.length;
    for(var i=0,ret=arr[0];i<arrLen;i++){
        ret=Math.max(ret,arr[i]);        
    }
    return ret;
}

function getMax2(arr){
    return Math.max.apply(null,arr)
}


myArr=fillRnd(20*10000)  //生成20万个随机数填到数组

var t1=new Date()
var max1=getMax(myArr)
var t2=new Date()
var max2=getMax2(myArr)
var t3=new Date()

if (max1!==max2) alert("error")
alert([t3-t2,t2-t1])   //在我机器上 96,464 .不同的机器,结果可能有差异

</script>


通过20万个数据的比较， getMax2 时间为 96ms 而 getmax时间为464。 两者相差5倍


 再比如数组的push方法。
var arr1=[1,3,4];
var arr2=[3,4,5];
如果我们要把 arr2展开，然后一个一个追加到 arr1中去，最后让  arr1=[1,3,4,3,4,5]
arr1.push(arr2)  显然是不行的。 因为这样做会得到  [1,3,4, [3,4,5] ]

我们只能用一个循环去一个一个的push   (当然也可以用 arr1.concat(arr2) 但是concat方法并不改变 arr1本身)
var arrLen=arr2.length
for(var i=0;i<arrLen;i++){
    arr1.push(arr2[i])
}

自从有了 Apply    ,事情就变得如此简单

Array.prototype.push.apply(arr1,arr2)";

