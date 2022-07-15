import express from 'express';

const{ checkToken } = require('./auth');
const user_controller = require('../controllers/user'); 
const router = express.Router();

router.post('/register', user_controller.register);
router.post('/login', user_controller.login);
router.get('/:id', checkToken, user_controller.find);

export default router;