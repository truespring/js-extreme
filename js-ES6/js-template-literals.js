// 템플릿 리터럴은 문자열 리터럴에 표현식을 포함하고 여러 라인을 지원하는 기능을 제공한다.
// 이 구문은 문자열을 묶는 데 작은따옴표나 큰따옴표 대신 역 따옴표(`) 문자를 사용한다.
let user = {
	name: 'Ted',
	greeting () {
		console.log(`Hello, I'm ${this.name}.`);
	}
};
user.greeting();	// Hello, I'm Ted.
// 템플릿 리터럴 내부에서 확인할 수 있듯이 ${...} 구문을 사용해 this로 해당 실행 컨텍스트에 접근할 수 있다.
let greeting = `Hello, I'm ${user.name}.
Welcome to the team!`;
console.log(greeting);	// Hello, I'm Ted.
				// Welcome to the team!
// 주의할 점은 역 따옴표 문자 내부에 있는 모든 공백도 출력된다는 점이다.
let greeting = `Hello, I'm ${user.name}.
			Welcome to the team!`;
console.log(greeting);	// Hello, I'm Ted.
				//			Welcome to the team!
