/*
  es5 中比较两个值是否相等
  == 会自动转换数据类型
  === NaN 不等于自身

  object.is();  用来比较两个值是否严格相等


  let isR1 = Object.is('foo','foo');
  console.log(isR1);

  let isR2 = Object.is({},{});
  console.log(isR2);



  console.log(+0===-0);
  console.log(NaN===NaN);
  console.log(Object.is(NaN,NaN));


  // 部署Object.is()方法
  Object.defineProperty(Object,'is',{
    value: function(x,y){
      if(x===y){
        return x !==0 || 1/x === 1/y;
      }
      return x !== x && y !== y;
    },

    configurable: true,
    enumberable: false,
    writable: true
  });

  let isR3 = Object.is(NaN,NaN);
  console.log(isR3);

*/

/*

  // Object.assign() 用于对象的合并，合并到第一个参数对象中

  const target = {a:1};
  const source1 = {b:2};
  const source2 = {c:3};
  Object.assign(target,source1,source2);
  console.log(target);


  // 当多个对象合并时 如果对象中有相同的属性
  // 相同属性在合并时  去后合并的对象中的属性的值
  let objCount = {count:5};
  let obj1 = { a: 1, b: 2 };
  let obj2 = { b: 3, c:5 };
  let obj3 = { c: 8 };
  Object.assign(objCount,obj1,obj2,obj3);
  console.log(objCount);

  // 当Object.assign() 只有一个参数对象时
  // 则返回该对象
  let oneObj = {a:0};
  let isSomeObj = Object.is(Object.assign(oneObj),oneObj);
  console.log(isSomeObj);

  // 如果参数不是对象并且不是 undefined 和 null 将参数转变成
  // 如果是 undefined 和 null 则报错

  Object.assign(undefined);   // 报错
  Object.assign(null);        // 报错


  // 其他类型的值（数字，字符串，布尔值）不在首参数 不会报错
  // 字符窜以数组的形式，拷贝如目标对象，其他值都不会产生效果
  const v1 = "abc";
  const v2 = true;
  const v3 = 10;

  // let obj = Object.assign({},v1,v2,v3);
  // let obj = Object.assign(v2);
  let obj = Object.assign("abs");
  console.log(obj);


  // Object.assign 拷贝的属性是有限制的，只拷贝原对象的资深属性不拷贝继承属性
  // 也不拷贝不可枚举的属性  enumerable: false

  let copyObj = Object.assign(
    {b:'c'},
    Object.defineProperty({},'invisible',{
      value:'hello',
      enumerable: false
    })
  );
  console.log(copyObj);


  // let testArr = [1,2,3,4];
  // let newArr = testArr.map((item,index)=>{
  //   return item+=2;
  // });
  // console.log(newArr);

*/


/*
  // 浅拷贝 而不是深拷贝  如果源对象的某个属性的值是对象 那么目标对象拷贝得到这个对象的应用
  const obj1 = {a:{b:1}};
  const obj2 = Object.assign({},obj1);

  console.log(obj2);
  obj2.a.b = 2;
  console.log(obj1,obj2);

  // 同名属性的替换
  const target = {a:{b:'c',d:'e'}};
  const source = {a:{f:'hello'}};
  // const source = {e:{f:'hello'}};
  let obj3 = Object.assign(target,source);
  console.log(obj3);


  // Object.assign 用来处理数组时，会将数组视为对象
  let newA = Object.assign([1,2,3],[5,6,7,8,9]);
  console.log(newA);


  // Object.assign 只能进行值的复制，如果要复制的值是一个取值函数，那么将球之后再赋值
  const cart = {
    _wheels:4,
    get wheels(){
      return this._wheels;
    },
    set wheels(val){
      if(val<2){
        throw new Error("轮子太少");
      }else{
        this._wheels = val;
      }
    }
  }
  const nullObj = {};
  let newO = Object.assign(nullObj,cart);
  console.log(nullObj,newO);

  // {
  //   _wheels:4,
  //   wheels:4
  // }




  // 对象的原型
  class Distance {
      constructor() {
          this.EARTHRADIUS = 6370996.81;
      }

      calculateDistance(lat1, lon1, lat2, lon2) {
          let delta_lat = lat2 - lat1;
          let delta_lon = lon2 - lon1;

          let alpha = delta_lat / 2;
          let beta = delta_lon / 2;
          let a = Math.sin(this.deg2rad(alpha)) * Math.sin(this.deg2rad(alpha)) + Math.cos(this.deg2rad(lat1))
              * Math.cos(this.deg2rad(lat2)) * Math.sin(this.deg2rad(beta)) * Math.sin(this.deg2rad(beta));
          let c = Math.asin(Math.min(1, Math.sqrt(a)));
          let distance = 2 * this.EARTHRADIUS * c;

          return Math.round(distance);
      }

      deg2rad(deg) {
          return (deg * Math.PI / 180.0);
      }

  }

*/

  // 简单的继承
  function Animate(){
    this.intr = "我的同类们有的能飞,有的不能飞!我们是人类的朋友。";
  }
  Animate.prototype = {
    intrMe:function(){
      console.log(this.intr);
    }
  }

  function Bird(name,legs,color){
    this.name = name;
    this.legs = legs;
    this.color = color;
    this.featrue = function(){
      console.log("我叫"+this.name+",有"+this.legs+"脚,全身"+this.color+"色。");
      this.intrMe();
    }
  }
  Bird.prototype = new Animate();

  var mq = new Bird("麻雀","4","黑");

