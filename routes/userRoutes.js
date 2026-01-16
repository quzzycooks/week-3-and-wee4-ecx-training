const express = require('express');
const router = express.Router();
// Double check: Is your file named userControllers.js or userController.js?
const userController = require('../controllers/userControllers'); 

// Testing if the functions exist before assigning them
console.log("Controller check:", userController);

router.get('/', userController.getUsers); 
router.post('/', userController.createUser);

module.exports = router;