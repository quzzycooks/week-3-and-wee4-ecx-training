const Task = require('../models/Task');

// 1. Create a New Task
exports.createTask = async (req, res) => {
    try {
        
        const taskData = req.body;
        
        
        const newTask = await Task.create(taskData);
        
        
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ message: "Could not create task" });
    }
};


exports.getTasks = async (req, res) => {
    try {
        
        const allTasks = await Task.find();
        res.status(200).json(allTasks);
    } catch (error) {
        res.status(500).json({ message: "Error fetching tasks" });
    }
};


exports.deleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        await Task.findByIdAndDelete(id);
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting task" });
    }
};