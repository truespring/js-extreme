function User (name, interests) {
    this.name = name;
    this.interests = interests;
} // User 생성자 함수 만듦
User.prototype.greeting = function () {
    console.log('Hi, I\'m ' + this.name + '.');
} // 5번부터 7번 라인에서 User 프로토타입에 greeting 프로퍼티를 생성함.

console.log(User.constructor === Function); // true 자바스크립트에서 생성자 객체를 역참조하고 있는 constructor 프로퍼티를 이용해 누가 객체를 생성했는지 확인.
console.log(User.prototype.constructor === User); // true User 생정자 함수가 생성되면 그것은 프로토타입 객체를 가짐. User 프로토타입 객체 자체가 User 생성자 함수에 의해 생성되었음을 확인.

var user = new User();
console.log(user.__proto__ === User.prototype); // true 자바스크립트에서 User 생정자 함수로 user 객체를 생성한 이후에 user 객체는 Uesr 프로토타입 객체를 참조하는 __proto__ 프로퍼티 객체를 가짐을 확인

function TeamMember(name, interests, tasks) {
    User.call(this, name, interests);
    this.tasks = tasks;
} // 15번부터 18번 라인에서는 TeamMember 생성자 함수를 만들고 생정자 함수 내에서는 Function 객체에서 생성자 체인을 위해 상속받은 User 생성자 함수의 call() 메소드를 호출.
TeamMember.prototype = Object.create(User.prototype);
TeamMember.prototype.greeting = function () {
    console.log('I\'m ' + this.name + '. Welcome to the team!');
};
TeamMember.prototype.work = function () {
    console.log('I\'m working on ' + this.tasks.length + ' tasks');
};

console.log(User.prototype === TeamMember.prototype); // false
console.log(User.prototype.constructor === TeamMember.prototype.constructor); // true

var member = new TeamMember('Sunny', ['Traveling'], ['Buy three tickets', 'Book a hotel']);
member.greeting();  // I'm Sunny. Welcome to the team!
member.work();      // I'm working on 2 tasks

console.log(member instanceof TeamMember);  // true
console.log(member instanceof User);        // true
console.log(member instanceof Object);      // true

User.prototype.eat = function () {
    console.log('What will I have for lunch?');
}
member.eat();   // What will I have for lunch?

// 최상위 객체에 메소드 추가
Object.prototype.move = function () {
    console.log('Every object can move now');
};
member.move();  // 이제 모든 객체가 move를 호출할 수 있음.
var alien = {};
alien.move();   // 이제 모든 객체가 move를 호출할 수 있음.
User.move();    // 생정자 함수 객체도 호출할 수 있음.

console.log(member.__proto__ === TeamMember.prototype);         // true
console.log(TeamMember.prototype.__proto__ === User.prototype); // true
console.log(User.prototype.__proto__ === Object.prototype);     // true

User.prototype.__proto__ = null;
member.move(); // Uncaught TypeError: member.move is not a function
console.log(member instanceof Object); // false

TeamMember.prototype.isPrototypeOf(member); // true 프로토타입 체인을 확인하는 데 Object.prototype.isPrototypeof()를 사용할 것을 추천함.