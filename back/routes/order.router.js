import express from 'express';
import { checkToken } from './auth.js'
import * as order_controller from '../controllers/order.controller.js'

const router = express.Router();

router.post('/register', order_controller.register);
router.get('/:id', order_controller.getOrder);
router.put('/:id', checkToken, order_controller.update);

export default router;