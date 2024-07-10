const taskModel = require('../models/taskModel');

const getAllTasks = (req, res) => {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const sortBy = req.query.sort || 'id';
    const filters = {
        title: req.query.title || '',
        description: req.query.description || ''
    };

    let filteredTasks = taskModel.getFilteredTasks(filters);
    filteredTasks = taskModel.getSortedTasks(filteredTasks, sortBy);
    const paginatedTasks = taskModel.getPaginatedTasks(filteredTasks, page, limit);

    res.status(200).json(paginatedTasks);
};

const getTaskById = (req, res) => {
    const task = taskModel.getTaskById(parseInt(req.params.id, 10));
    if (!task) {
        return res.status(404).send('Task not found');
    }
    res.status(200).json(task);
};

const createTask = (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).send('Title and description are required');
    }
    const newTask = taskModel.createTask(title, description);
    res.status(200).json(newTask);
};

const updateTask = (req, res) => {
    const { title, description } = req.body;
    const updatedTask = taskModel.updateTask(parseInt(req.params.id, 10), title, description);
    if (!updatedTask) {
        return res.status(404).send('Task not found');
    }
    res.status(200).json(updatedTask);
};

const deleteTask = (req, res) => {
    console.log(req.params)
    const success = taskModel.deleteTask(parseInt(req.params.id, 10));
    if (!success) {
        return res.status(404).send('Task not found');
    }
    res.status(200).send(`successfully deleted task width id:${req.params.id}`);
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask,
};