function getProjects() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{ id: 1, name: 'Project A' }, { id: 2, name: 'Project B' }]);
        }, 100);
    });
}
function getTasks(projects) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ projects,
                      tasks: ['Buy three tickets', 'Book a hotel'] });
        }, 100);
    });
}
function render({ projects, tasks}) {
    console.log(`Render ${projects.length} projects and ${tasks.length} tasks`);
}
getProjects()
    .then(getTasks)
    .then(render)
    .catch((error) => {
        console.log('Hanlding error', error);
    });