function User(name, department) {
    var _departmemnt = department;
    var _name = name;
    Object.defineProperty(this, 'name', {
        value: _name,
        writable: true,
        enumerable: true,
        configurable: false
    }); // 4번부터 9번 라인은 Object.defineProperty를 사용해 데이터 프로퍼티로 name을 정의하며, 그 실제 데이터는 내부 프로퍼티인 _name에 저장.
    Object.defineProperty(this, 'department', {
        get: function () {
            console.log('Retrieving department');
            return _departmemnt;
        },
        set: function (newValue) {
            console.log('Updating departmen value to "' + newValue + '"');
            _departmemnt = newValue;
        },
        enumerable: true,
        configurable: true
    }); // 10번부터 21번 라인까지는 get 접근자와 set 접그자를 가지고 있는 접근 프로퍼티로 department를 정의하며, 실제 값은 _department의 값.
    Object.defineProperty(this, 'greeting', {
        value: function () {
            console.log('Hi, I\'m ' + _name + '.');
        },
        enumerable: false,
        configurable: false
    }); // 22번부터 28번 라인은 데이터 프로퍼티로 greeting 프로퍼티를 정의하며, 그 값은 function 객체. 
}
var user = new User('Sunny', 'Engineering'); // User 생성자로 user 객체를 생성.
console.log(user.department); // department 프로퍼티에 접근, get 접근자로 게터 함수를 호출해 실제 department 값이 전달되기 이전에 10번 라인 실행.
user.department = 'Marketing'; // department 프로퍼티에 새로운 값을 할당. 15번 라인에서 set 접근자를 정의했으므로 세터 함수가 호출될 것.
user.greeting(); // user 객체의 greeting 프로퍼티를 함수로 정의했으므로 그것을 호출할 것.
Object.defineProperty(user, 'name', {
    enumerable: false
}); // 34번부터 36번 라인에서는 name 프로퍼티 재정의를 시도함. 하지만 configurable의 값이 false이므로 자바스크립트는 에러를 던짐.
delete user.name; // 위와 마찬가지
delete user.department; // department 프로퍼티의 configurable은 true이므로 department 프로퍼티의 삭제 작업은 동작함.
for (var prop in user) {
    console.log(prop);
} // 39번부터 41번 라인에서는 오직 name 프로퍼티만 콘솔에 표시. department는 이미 삭제됐고, greeting 프로퍼티는 열거할 수 없기 때문.