/*
  const foo = "bar";
  const baz = {foo};
  console.log(baz);
*/


/*
  function fn1(x,y){
    return {x,y};
  }
  console.log( fn1(5,6) );

  function fn2(x,y){
    return {x:x,y:y};
  }
  console.log( fn2(8,10) );
*/


/*
  // 对象的简写
  const o = {
    method(){
      console.log("hello");
    }
  }
  o.method();

  let birth = '2017/01/01';
  const Person = {
    name:'张三',
    birth,
    sayName(){
      console.log("my name is "+this.name+", my birth is "+this.birth);
    }
  }
  Person.sayName();
*/

/*
  // 方便处理所需的数据类型
  function getPoint(){
    const x = 1;
    const y = 2;
    return {x,y};
  }
  console.log( getPoint() );
*/

/*
  const cart = {
    _wheels: 4,

    get wheels(){
      return this._wheels;
    },

    set wheels(value){
      if(value < this._wheels){
        throw new Error("值太小了");
      }
      this._wheels = value;
    }

  };

  cart.wheels = 9;
*/



/*
  // 是关键字时 如class 最好用引号;
  const obj = {
    class(){
      console.log(555);
    }
  }
  obj.class();
 
  const obj = {
    'class': function(){
      
    }
  }
*/


/*
  // 属性的表达式
  let obj1 = new Object();
  obj1.foo = true;
  obj1['a'+'bc'] = 123;
  console.log(obj1);

  let propKey = 'foo';
  let obj2 = {
    [propKey]:true,
    ['a'+'bc']:123
  }
  console.log(obj2);

*/  
  let lastWord = 'last word';

  const a = {
    'first word': 'hello',
     [lastWord]: 'world',
  };

  
  let obj3 = {
    name: 'fff',
    ['say'+'name'](){
      console.log(this.name);
    }
  }
  obj3.sayname();


















































































































