const taskModel = require("../models/task.model");

const createTask = async (req, res, io) => {
    try {
        const { description, category } = req.body;
        const task = await taskModel.create({ user: req.user._id, description, category });
        
        io.emit('newTaskCreated', task);

        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: "Server error while creating task", error });
    }
};

const getTask = async (req, res) => {
    try {
        const tasks = await taskModel.find({ user: req.user._id });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Server error while fetching tasks", error });
    }
};

const updateTask = async (req, res, io) => {
    try {
        const { id } = req.params;
        const { description, completed } = req.body;

        let task = await taskModel.findById(id);
        if (!task || task.user.toString() !== req.user._id.toString()) {
            return res.status(404).json({ message: 'Task not found or unauthorized' });
        }

        task.description = description || task.description;
        task.completed = completed !== undefined ? completed : task.completed;
        
        await task.save();

        io.emit('taskUpdated', task);

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: "Server error while updating task", error });
    }
};

const deleteTask = async (req, res, io) => {
    try {
        const task = await taskModel.findById(req.params.id);

        if (!task || task.user.toString() !== req.user._id.toString()) {
            return res.status(404).json({ message: 'Task not found' });
        }

        await task.deleteOne();

        io.emit('taskDeleted', { id: req.params.id });

        res.status(200).json({ message: 'Task removed' });
    } catch (error) {
        res.status(500).json({ message: "Server error while deleting task", error });
    }
};

const addComment = async (req, res, io) => {
    const { taskId } = req.params;
    const { text } = req.body;
  
    try {
        const task = await taskModel.findById(taskId);
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        const comment = {
            text,
            user: req.user._id,
            date: new Date(),
        };

        task.comments.push(comment);

        await task.save();
        
        io.emit("commentAdded", comment); 
        
        res.json(comment);
    } catch (error) {
        res.status(500).json({ error: "Error adding comment", error });
    }
};

const adminGetAllTasks = async (req, res) => {
    try {
        const tasks = await taskModel.find({});
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Server error while fetching all tasks", error });
    }
};

module.exports = { createTask, getTask, updateTask, deleteTask, adminGetAllTasks, addComment };
