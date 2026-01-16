const express = require('express');
const router = express.Router();

// Import our logic functions
const taskController = require('../controllers/taskController');

// Define each path clearly
router.post('/', taskController.createTask);
router.get('/', taskController.getTasks);
router.delete('/:id', taskController.deleteTask);

module.exports = router;