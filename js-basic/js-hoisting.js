/**
 * 호이스팅이랑 자바스크립트의 인터프리터가 함수 선언과 변수 선언을 
 * 선언들이 속해 있는 스코프 최상단으로 끌어올리는 방법에 관한 일종의 비유다. 
 */

travel = 'No plan';
var travel;
console.log(travel); // No plan

function travel() {
    console.log('Traveling');
}
travel(); // Uncaught TypeError

// 자바스크립트 인터프리터는 위 코드를 처리할 때 다음의 순서로 이해한다.
// 함수 선언을 최상위로 위치시킨다.
function travel() {
    console.log('Traveling');
}
// 변수 선언은 함수 선언 아래에 위치시킨다.
var travel;
travel = 'No plan';

console.log(travel); // No plan
travel(); // Uncaught TypeError: travel is not a function

// ------------------------------
function workout() {
    goToGym = function () {
        console.log('Workout in Gym A');
    }
    return;
    function goToGym() {
        console.log('Workout in Gym B');
    }
}
workout();

// 인터프리터
function workout() {
    function goToGym() {
        console.log('Workout in Gym B');
    }
    var goToGym;
    goToGym();
    goToGym = function () {
        console.log('Workout in Gym A');
    }
    return;
}
workout(); // Workout in Gym B