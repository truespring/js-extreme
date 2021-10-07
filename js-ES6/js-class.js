class User {
    constructor(name, interests) {
        this.name = name;
        this.interests = interests;
    }
    greeting() {
        console.log('Hi, I\'m ' + this.name + '.');
    }
    get interestsCount() {
        return this.interests ? this.interests.length : 0;
    }
}
class TeamMember extends User {
    constructor(name, interests) {
        super(name, interests);
        this._tasks = [];
        this._welcomeText = 'Welcome to the team!';
    }
    greeting() {
        console.log('I\'m ' + this.name + '. ' + this._welcomeText);
    }
    work() {
        console.log('I\'m working on ' + this._tasks.length + ' tasks.');
    }
    set tasks(tasks) {
        let acceptedTasks = [];
        if (tasks.length > TeamMember.maxTasksCapacity()) {
            acceptedTasks = tasks.slice(0, TeamMember.maxTasksCapacity());
            console.log('It\'s over max capacity. Can only take two.');
        } else {
            acceptedTasks = tasks;
        }
        this._tasks = this._tasks.concat(acceptedTasks);
    }
    static maxTasksCapacity() {
        return 2;
    }
}
let member = new TeamMember('Sunny', ['Traveling']);
member.greeting();                  // I'm Sunny. Welcome to the team!
member.tasks = ['Buy three tickets', 'Book a hotel', 'Rent a car']; // It's over max capacity. Can only take two.
member.work();                      // I'm working on 2 tasks.
console.log(member.interestsCount); // 1
member.interestsCount = 2;          // 변경 사항은 저장되지 않을 것이다. TeamMember에는 setter가 없기 때문
console.log(member.interestsCount); // 1
console.log(member.tasks);          // undefined

User.prototype.eat = function () {
    console.log('What will I have for lunch?');
};
member.eat();       // What will I havefor lunch? eat()을 User의 프로토타입 객체에 추가해야 한다.

User.sleep = function () {
    console.log('Go to sleep');
};                  // User 클래스 자체, 더 자세하게는 User 생정자 함수 자체에 프로퍼티로 sleep을 추가했기 때문. sleep은 User 크래스의 정적 메소드가 된다.
member.sleep();     // Uncauht TypeError: member.sleep is not a function
User.sleep();       // Go to sleep

console.log(User.prototype.hasOwnProperty('eat'));  // true
console.log(User.hasOwnProperty('eat'));            // true