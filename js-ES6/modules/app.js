// 생성한 모듈을 가져오는 모듈
import User from './user'; // 기본 가져오기는 기본 내보내기에서 사용한 이름과 일치하지 않아도 된다.
import * as Roles from './roles'; // role.js 모듈을 가져와서 Roles로 이름을 지정하는 네임스페이스 가져오기를 사용한다.
import completeTask from './tasks'; // 기본 가져오기로 task.js 모듈에서 completedTask 함수를 가져온다.
import {completedCount as totalCompletedTasks} from './tasks'; // 명명된 가져오기로 다시 같은 모듈에서 completedCount를 가져온다.
                                          // ES6 모듈은 싱글톤이기 때문에 여기에서처럼 두 번 가져오기를 해도 task.js 모듈의 코드를 한 번만 평가한다.
let user = new User('Ted', Roles.USER); // 점 표기법으로 명명된 내보내기를 한 role.js 모듈에 접근한다.
completeTask(user);
console.log(`Total completed ${totalCompletedTasks}`);
// completedCount++;
// 가져온 객체를 변경할 수 있다는 것만 보여준다.
// 하지만 좋은 사례는 아니다.
User.prototype.walk = function () {
    console.log(`${this.name} walks`);
};
user.walk();