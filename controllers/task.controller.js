const taskModel = require("../models/task.model");

const createTask = async(req,res)=>{
    const { description, category } = req.body;
    const task = await taskModel.create({ user: req.user._id, description, category });
    res.status(201).json(task);
}

const getTask = async (req, res) => {
    const tasks = await taskModel.find({ user: req.user._id });
    res.status(200).json(tasks);
};

const deleteTask = async (req, res) => {
    const task = await taskModel.findById(req.params.id);

    if (!task || task.user.toString() !== req.user._id.toString()) {
        return res.status(404).json({ message: 'Task not found' });
    }

    await task.deleteOne();
    res.status(200).json({ message: 'Task removed' });
};

const adminGetAllTasks = async (req, res) => {
    const tasks = await taskModel.find({});
    res.status(200).json(tasks);
};

module.exports = {createTask, getTask, deleteTask, adminGetAllTasks}