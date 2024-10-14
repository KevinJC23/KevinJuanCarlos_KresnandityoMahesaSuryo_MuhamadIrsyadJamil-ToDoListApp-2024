
const toggleTaskComplete = (index) => {
    tasks[index].completed = !tasks[index].completed;
    updateTasksList();
    updateStatus();
    saveTasks();
};


    function fire(particleRatio, opts) {
    confetti(
        Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
        })
    );
    }

    