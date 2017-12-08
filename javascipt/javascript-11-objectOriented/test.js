function Person(name,age,job){
	this.name = name;
	this.age = age;
	this.job =job;
	this.sayName = function(){
		alert(this.name)
	}
}

function constructorAsFun(){
	var person = new Person("nicholas",27,"enginner");
	person.sayName();

	Person("greg",38,"doctor");
	window.sayName();

	var o = new Object();
	Person.call(o,"kristen",40,"nurse");
	o.sayName();
}