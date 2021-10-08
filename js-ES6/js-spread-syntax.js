let urgentTasks = ['Buy three tickets'];
let normalTasks = ['Book a hotel', 'Rent a car'];
let allTasks = [...urgentTasks, ...normalTasks];	// 전개 구문으로 urgentTask 배열과 normalTasks 배열을 확장한다.

((first, second) => {
	console.log('Working on ' + first + ' and ' + second)
})(...allTasks);	// 전개 구문으로 allTasks 배열을 확장하고 함수의 인자로 각 요소를 전달한다.
				// first 인자는 'Buy three tickets' 값을 가지고 second 인자는 'Book a hotel' 값을 가진다.
