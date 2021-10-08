var shoppingCart = {
	items: ['Apple', 'Orange'],
	inventory: { Apple: 1, Orange: 0 },
	checkout() {
		this.items.forEach(item => {
			if (!this.inventory[item]) {
				console.log('Item ' + item + ' has sold out.');
			}
		})
	}
}
shoppingCart.checkout();

// ES5 code
var shoppingCart = {
	items: ['Apple', 'Orange'],
	inventory: { Apple: 1, Orange: 0 },
	checkout() {
		// 컨텍스트를 재할당하고 forEach에 전다라한 코백에서
		// 참조할 수 있도록 클로저를 활용한다.
		var that = this;
		this.items.forEach(function (item) {
			if(!that.inventory[item]) {
				console.log('Item ' + item + ' has sold out.');
		
			}
		})
	}
}
shoppingCart.checkout();

var name = 'Unknown';
var greeting = () => {
	console.log('Hi, I\'m ' + this.name);
};
greeting.call({ name: 'Sunny' });	// I'm Unknown
greeting.apply({ name: 'Tod' });	// I'm Unknown
var newgreeting = greeting.bind({ name: 'James' });
newGreeting();				// I'm Unknown

// 화살표 함수에서 this는 항상 상위 스코프의 실행 컨텍스트로 해석된다.

class User {
	constructor(name) {
		this.name = name;
	}
}
User.prototype.swim = () => {
	console.log(this.name + ' is swimming');
};
var user = new User();
console.log(user.swim());	// is swimming
// this는 User 객체를 참조하지 않는다. 저역 컨텍스트를 참조한다.
