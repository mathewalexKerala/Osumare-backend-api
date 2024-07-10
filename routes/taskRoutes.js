const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authenticateToken = require('../middleware/auth');
const jwt = require('jsonwebtoken');
const secretKey = 'secret_key';

const validUsername = 'mathew';
const validPassword = '123';

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === validUsername && password === validPassword) {
     
        const user = { id: 1, username: validUsername };
        const token = jwt.sign(user, secretKey, { expiresIn: '1h' });
        return res.json({ token });
    } else {
     
        return res.status(401).json({ message: 'Invalid username or password' });
    }
});




router.get('/tasks', authenticateToken, taskController.getAllTasks);
router.get('/tasks/:id', authenticateToken, taskController.getTaskById);
router.post('/tasks', authenticateToken, taskController.createTask);
router.put('/tasks/:id', authenticateToken, taskController.updateTask);
router.delete('/tasks/:id', authenticateToken, taskController.deleteTask);

module.exports = router;