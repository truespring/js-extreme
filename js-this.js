function User(name) {
	console.log('I\'m in "' + this.constructor.name + '" context.'); // "User"
	this.name = name;
	this.speak = function () {
		console.log(this.name + ' is speaking from "' + this.constructor.name + '" context.'); // Ted, "User"
		var drink = function () {
			console.log('Drinking in "' + this.constructor.name + '"'); // "Window"
		}
		drink();
	};
	function ask() {
		console.log('Asking from "' + this.constructor.name + '" context.'); // "Window"
		console.log('Who am I? "' + this.name + '"'); // "Unknown"
	}
	ask();
}
var name = 'Unknown';
var user = new User('Ted');
user.speak();

console.log(Function.prototype.isPrototypeOf(user.speak));	// true
user.speak.hasOwnProperty('apply');							// false
user.speak.__proto__.hasOwnProperty('apply');				// true