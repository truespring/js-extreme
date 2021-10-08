// 비구조화 할당 - destructuring assignment
// 배열 내의 요소, 문자열 내의 문자, 객체 내의 프로퍼티를 분리하고 배열 릴터럴, 객체 리터럴과 비슷한
// 구문을 이용해 구분된 변수들을 할당할 수 있다. 이를 변수 선언이나 변수 할당, 함수 매개변수 할당에 활용할 수 있다.

// 객체 비구조화 - Object destructuring
let user = {name: 'Sunny', interests: ['Traveling', 'Swimming']};
let {name, interests, tasks} = user;
console.log(name);	// Sunny
console.log(interests);	// ["Traveling", "Swimming"]
console.log(tasks);	// undefined
// name 변수와 interests 변수는 user 객체 내 같은 이름의 프로퍼티 값이 할당된다.
// tasks 변수는 user 객체에 일치하는 프로퍼티가 없어 그 값이 undefined가 된다.

let {name, interests, tasks=[]} = user;
console.log(tasks);	// []
// 기본 값을 설정하면 이런 현상을 피할 수 있다.

let {name: firstName} = user;
console.log(firstName);	// Sunny
// 객체 비구조화로 다른 변수명을 선택할 수 있다. user 객체의 name 프로퍼티의 값을 선택하고 firstName 변수에 할당한다.

// 배열 비구조화 - array destructuring
let [first, second] = ['Traveling', 'Swimming', 'Shopping'];
console.log(first);	// Traveling
conosle.log(second);	// Swimming
let [,, third, fourth] = ['Traveling', 'Swimming', 'Shopping'];
console.log(third);	// Shopping 세 번째 변수
console.log(fourth);	// undefined 네 번째 변수
let [,, third, fourth = ''] = ['Traveling', 'Swimming', 'Shopping'];
console.log(fourth);	// ''

// 중첩 비구조화
let user = {name: 'Sunny', interests: ['Traveling', 'Swimming']);
let {interests: [,second]} = user; // 자바스크립트는 사실 선언하지 않는다.
console.log(second);	// Swimming
console.log(interests);	// ReferenceError 자바스크립트가 콜론의 왼쪽 부분을 이용해 같은 이름의 프로퍼티 값을 추출하고
					// 오른쪽 부분을 이용해 더 많은 비구조화 할당을 수행하는 것이다.
let {interests} = user; // interests 프로퍼티를 추출할 수 있다.

const fruits = [{name: 'Apple', price: 100}, {name: 'Orange', price: 80}];
let [,{name:secondFruitName}] = fruits;
console.log(secondFruitName);	// Orange

// 나머지 요소 - rest elements
// 비구조화 할당에서 배열의 나머지 요소를 다른 배열에 넣는 데 나머지 요소와 동일한 구문을 사용할 수 있다.
let [first, ...others] = ['Traveling', 'Swimming', 'Shopping'];
console.log(others);	// ["Swimming", "Shopping"] 두 번째 요소와 세 번째 요소가 others 변수로 복사되었다. 이는 얇은 복사(shallow clone)이다.
				// 배열의 요소가 객체일 때 복사된 배열에서 한 객체 프로퍼티를 변경하면 본질적으로 두 배열의 요소가 동이한 객체를
				// 참조하고 있기 때문에 원본 배열에서도 변경된다.
const fruits = [{name: 'Apple', price: 100}, {name: 'Orange', price: 80}];
let [...myFruits] = fruits;
console.log(myFruits[0].name);		// Apple
myFruits.push({name: 'Banana', price: 90});
console.log(myFruits.length);		// 3
console.log(fruits.length);		// 2
myFruits[0].price = 110;
console.log(fruits[0].price);		// 110
// 복사된 배열에 새로운 아이템을 추가하는 것은 원본 배열에 영향을 주지 않는다. 
// 하지만 복사된 배열에서 price 프로퍼티 값을 변경하면 원본 배열에서도 값이 변경될 것이다.

// 함수 매개변수 비구조화
function workout({gym}, times) {
	console.log('Workout in ' + gym + ' for ' + times + ' times');
}
let thisWeek = {gym: 'Gym A'};
workout(thisWeek, 2);	// Workout in Gym A for 2 times

function workout({gym, todos}) {
	let [first] = todos;
	console.log('Start ' + first + ' in ' + gym);
}
let today = {gym: 'Gym A', todos: ['Treadmill']};
workout(today);			// Start Treadmill in Gym A
workout({gym: 'Gym B'});	// throw TypeError todos 프로퍼티에 인자가 전달되지 않았기 때문에 TypeError가 발생한다.

function workout({gym, todos=['Treadmill']}) {
	let [first] = todos;
	console.log('Start ' + first + ' in ' + gym);
}
workout({gym: 'Gym A'});	// Start Treadmill in Gym A
workout();			// throw TypeError
