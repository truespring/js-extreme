console.log('Inside tasks module');
export default function completeTask(user) {
  console.log(`${user.name} completed a task`);
  completedCount++;
}
// 완료된 작업의 개수를 추적
export let completedCount = 0;

// 2번 라인에서는 completedTask 함수를 기본 내보내기로하고 6번 라인에서는 completedCount 변수에 대해 명명된 내보내기를 했다.