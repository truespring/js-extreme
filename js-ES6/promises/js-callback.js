function getProjects(callback) {
    // 서버 API를 호출하는 데 setTimeout을 활용
    setTimeout(() => {
        callback([{ id: 1, name: 'Project A' }, { id: 2, name: 'Project B' }]);
    }, 100);
}
function getTasks(projects, callback) {
    // 서버 API를 호출하는 데 setTimeout을 활용
    setTimeout(() => {
        // 구체적인 프로젝트의 작업 반환
        callback([{ id: 1, projectId: 1, title: 'Task A' },
            { id: 2, projectId: 2 ,title: 'Task B' }]);
    }, 100);
}
function render({ projects, tasks }) {
    console.log(`Render ${projects.length} projects and ${tasks.length} tasks`);
}
getProjects((projects) => {
    getTasks(projects, (tasks) => {
        render({ projects, tasks });
    });
}); // 비동기 호출을 구성하는 데 콜백을 활용한다. getProjects(), getTasks(), render() 메소드가 중첩되어 콜백 지옥이 생성된 것을 볼 수 있다.