const Task = require('../models/Tasks');

// 1. Create a New Task
exports.createTask = async (req, res) => {
    try {
        const taskData = req.body;
        // This creates the task in MongoDB
        const newTask = await Task.create(taskData);
        
        console.log("Task Created:", newTask);
        res.status(201).json(newTask);
    } catch (error) {
        // Updated to show the SPECIFIC error (e.g., "User ID is invalid")
        res.status(400).json({ 
            message: "Task creation failed", 
            error: error.message 
        });
    }
};

// 2. Get All Tasks
exports.getTasks = async (req, res) => {
    try {
        const allTasks = await Task.find().populate('user', 'name email'); 
        res.status(200).json(allTasks);
    } catch (error) {
        res.status(500).json({ message: "Error fetching tasks", error: error.message });
    }
};

// 3. Delete a Task
exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) return res.status(404).json({ message: "Task not found" });
        
        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting task", error: error.message });
    }
};