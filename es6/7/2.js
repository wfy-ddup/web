/*
  const person = {
    sayName(){
      console.log('hello');
    }
  }
  
  function helloWorld(){
    console.log('hello_world');
  }

  console.log( person.sayName.name );
  console.log( helloWorld.name );
*/


/*
  const obj = {
    _num : 4,

    get num(){
      return this._num;
    },

    set num(x){

      if(x<0){
        throw new Error("必须为大于0的数");
      }
      this._num = x;
    }
  }
  console.log( '赋值前_'+obj.num );
  obj.num = 100;
  console.log( '赋值后_'+obj.num );

  
  const descriptor = Object.getOwnPropertyDescriptor(obj,'num');
  
  console.log(descriptor.get.name);
  console.log(descriptor.set.name);
  // descriptor.get.name;
*/


/*
  // var a = (new Function()).name;
  var o = {
    a : 50,
    b : 25,
    c : 10
  }

  var aa = function(){
    console.log(this.a*this.b);
  }.bind(o);
  console.log( aa.name );


  const key1 = Symbol('description');
  const key2 = Symbol();
  let obj = {
    [key1](){},
    [key2](){}
  };

  console.log(obj);
  console.log(obj[key1].name);
  console.log(obj[key2].name);
*/