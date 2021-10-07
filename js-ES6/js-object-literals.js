const advice = 'Stay hungry. Stay foolish.';

let advisor = {
	__proto__: new TeamMember('Adam', ['Consulting']),	// 프로토타입 설정
	advice,												// 프로퍼티 축약 표현
	greeting() {										// 매소드 푹약 표혀
		super.greeting();								// super 메소드 호출
		console.log(this.advice);
	},
	[advice.split('.')[0]]: 'Always learn more' // 계산된 프로퍼티 이름
};

console.log(TeamMember.prototype.isPropertyOf(advisor)); 	// true
console.log(advisor instanceof TeamMember);					// true

advisor.greeting();		// I'm Adam. Welcome to the team!
						// Stay hungry. Stay foolish.