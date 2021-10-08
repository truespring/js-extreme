export default class User {
  constructor (name, role) {
    this.name = name;
    this.role = role;
  }
};
// 이 모듈에서 User 클래스 앞에 export와 default 키워드를 붙여 기본 내보내기로 User 클래스르 내보낸다.
// 인라인 방식으로 export를 선언하는 대신 User 클래스를 먼저 선언한 다음 모듈의 맨 아래 또는 모듈 최상위,
// 심지어 User 클래스 이전에서도 내보내기를 할 수 있다.
