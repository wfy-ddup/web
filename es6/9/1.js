/*
// es5 对象的继承
function Man (x,y,sex) {
  this.x = x;
  this.y = y;
  this.sex = sex;
}

Man.prototype = {
  toString:function(){
    console.log('眼睛 ' + this.x + ', 四肢 ' + this.y);
  }
}

function Woman (name, color) {
  this.name = name;
  this.color = color;
  // Woman 私有
  this.like = function (name, color) {
    console.log(this.name + ' like ' + this.color);
  }
}

Woman.prototype = new Man(2, 4, 'woman');

var liFang = new Woman('liFang', 'blue');
console.log(liFang);
liFang.like();

var wangLei = new Man(2, 4, 'man');
wangLei.toString();
*/


/*
// es6
class Man {
  constructor () {
    this.x = 2;
    this.y = 2;
    this.z = 2;
  }

  sayAge () {
    console.log('i am ' + this.age);
  }

  sayType () {
    console.log('人，' + this.x + '只眼睛，' + this.y + '只手，' + this.z + '只腿。');
  }
}

class man extends Man {
  constructor (name, address, sex, age) {
    super();      // 只有调用 super(); 才能指定this
    this.sex = sex;
    this.address = address;
    this.name = name;
    this.age = age;
  }

  intrMe () {
    console.log('my name is ' + this.name + '，from ' + this.address + '，sex ' + this.sex);
  }
}

var wfy = new man('wfy', 'ah', '男', 30);
wfy.sayType();
wfy.intrMe();
wfy.sayAge();

var liLi = new man('lili', 'bj', '女', 32);
liLi.sayType();
liLi.intrMe();
liLi.sayAge();

class Point {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  // 静态方法 只能通过类进行调用
  static hello () {
    console.log('hello world');
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y);   // 只用调用了super(), 才能指定this;
    this.color = color;
  }
}


// 类相当于实例的原型，所有在类中定义的方法，都会被实例继承，而static关键词是为了让该方法不能被实例继承，只能通过类来调用
// 类能够继承父类中的static的静态方法  类自身能调用  类的实例无法继承

let cp = new ColorPoint(25, 0, 'green');
Point.hello();


// 静态方法也会被继承 
class A {
  static hello () {
    console.log('hello world')
  }
}

A.hello();

class B extends A {
  constructor () {
    super()
  }
}

B.hello();

*/


/*
// es5继承
// 
// class F {
//   say () {
//     console.log( this.a );
//   }
// }

// class S extends F {
//   constructor (a) {
//     super();
//     this.a = a;
//   }
// }

// var ss = new S('s');
// ss.say();
*/

/*

// super的作用  当函数使用与当对象使用
// 函数使用时 指向父类的构造函数 并绑定当前的this 在继承父类的子类中的构造函数中必须调用一次
// 当对象使用时 指向父类
 
class A {
  constructor () {
    console.log(new.target.name);  // new.target 指向正在执行的函数
  }
}
class B extends A {
  constructor () {
    super();   // A.prototype.constructor.call(this);
  }
}
class C extends B {
  constructor () {
    super();   // B.prototype.constructor.call(this);
  }
}
new A();
new B();
new C();


class A {
  p () {
    return 2;
  }
}

class B extends A {
  constructor () {
    super();
    console.log(super.p());  // super 当对象使用时  指向的是父类的 prototype
  }
}

var b = new B();
*/

class A {
  constructor () {
    this.x = 1;
  }
  print () {
    console.log(this.x);
  }
}

class B extends A {
  constructor () {
    super();
    this.x = 100;
  }
  m () {
    super.print();
  }
}

var b = new B();
b.m();
console.log(b);


