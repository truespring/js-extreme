const WorkoutPlan = () => {};
// Uncaught TypeError: WorkoutPlan is not a constructor
let workoutPlan = new WorkoutPlan();
console.log(WorkoutPlan.prototype);	// undefined
// 화살표 함수는 프로토타입 객체를 가지지 않기 때문에 생성자 함수도 가지지 아낳는다.
// new 연산자로 호출할 수 없다.
