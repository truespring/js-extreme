
// ES5에서 arguments 활용
function workout(exercise1) {
	var todos = Array.prototype.slice.call(arguments, workout.length);
	console.log('Start from ' + exercise1);
	console.log(todos.length + ' more to do');
}

// ES6에서 나머지 매개변수 활용용
function workout(exercise1, ...todos) {
	console.log('Start from ' + exericse1);		// Start from Treadmill
	console.log(todos.length + ' more to do');	// 2 more to do
	console.log('Args length: ' + workout.length);	// Args length: 1
}
workout('Treadmill', 'Pushup', 'Spinning');
