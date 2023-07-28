// complete this js code
function Person(name, age) {
		this_.name=name;
		this_.age=age;
	}
Person.prototype.greet = function() {
 console.log(`Hello, my name is ${this_.name} and I am ${this_.age} years old.`);
}

function Employee(name, age, jobTitle) {
		Person.call(this, name, age);
		this._jobTitle=jobTitle;
	}
	
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this._name}, I am ${this._age} years old, and my job title is ${this._jobTitle}`);
}
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
