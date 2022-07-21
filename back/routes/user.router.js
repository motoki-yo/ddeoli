import express from 'express';
import { checkToken } from './auth.js'
import * as user_controller from '../controllers/user.controller.js'

const router = express.Router();

router.post('/register', user_controller.register);
router.post('/login', user_controller.login);
router.get('/me', checkToken, user_controller.getUser);
router.put('/:id', checkToken, user_controller.update);
router.delete('/delete', checkToken, user_controller.remove);

export default router;