const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskControllers');
const auth = require("../middlewares/authMiddleware")

router.get('/',auth, taskController.getAllTasks);
router.post('/',auth , taskController.createTask);
module.exports = router;