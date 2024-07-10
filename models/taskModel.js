let tasks = [];
let currentId = 1;

const getAllTasks = () => tasks;

const getTaskById = (id) => tasks.find(task => task.id === id);

const createTask = (title, description) => {
    const newTask = { id: currentId++, title, description };
    tasks.push(newTask);
    return newTask;
};

const updateTask = (id, title, description) => {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks[taskIndex] = { id, title, description };
        return tasks[taskIndex];
    }
    return null;
};

const deleteTask = (id) => {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        return true;
    }
    return false;
};

const getPaginatedTasks = (taskArray, page, limit) => {
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    return taskArray.slice(startIndex, endIndex);
};

const getSortedTasks = (taskArray, sortBy) => {
    return taskArray.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -1;
        if (a[sortBy] > b[sortBy]) return 1;
        return 0;
    });
};

const getFilteredTasks = (filters) => {
    return tasks.filter(task => {
        return Object.keys(filters).every(key => {
            return task[key].toLowerCase().includes(filters[key].toLowerCase());
        });
    });
};


module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
    getPaginatedTasks,
    getSortedTasks,
    getFilteredTasks,
};