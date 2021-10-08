const fruits = [{ name: 'apple', price: 100 }, { name: 'orange', price: 80 }, { name: 'banana', price: 120 }];

// 변형 1
// 인자가 없을 때 빈 관호 세트()가 필요하다.
var countFruits = () => fruits.length;
// ES5 code
var countFruits = function () {
	return fruits.length;
};

// 변형 2
// 하나의 인자가 있을 때 괄호는 새략할 수 있다.
// 표현식의 값은 함수의 반환 값이다.
fruits.filter(fruit => fruit.price > 100);
// ES5 code
fruits.filter(function (fruit) {
	return fruit.price > 100;
});

// 변형 3
// 함수가 객체 리터럴을 반환할 때 괄호로 감싸야 한다.
var inventory = fruits.map(fruit => ({ name: fruit.name, storage: 1 }));;
// ES5 code
var inventory = fruits.map(function (fruit) {
	return {
		name: fruit.name,
		storage: 1
	};
});

// 변형 4
// 화살표 함수가 구문들로 이뤄진 본문을 가지고 있고 결과를 반환해야 할 때 return 구문이 필요하다.
var inventory = fruits.map(fruit => {
	console.log('Checking ' + fruit.name + ' storage');
	return { name: fruit.name, storage: 1 };
});
// ES5 code
var inventory = fruits.map(function (fruit) {
	console.log('CHecking ' + fruit.name + ' storage');
	return { name: fruit.name, storage: 1 };
});

// 화살표 함수에 중괄호를 사용하면 함수 본문은 단일 또는 여려 명령문으로 구성되어야 한다.
var sum = (a, b) => { return a + b };
sum(1, 2);	// 3

var sum = (a, b) => { a + b };
sum(1, 2);	// undefined
// 표현식을 사용하면 동작한다.
var sum = (a, b) => a + b;
sum(1, 2);	// 3