import express from 'express';
import { checkToken } from './auth.js'
import * as order_controller from '../controllers/order.controller.js'

const router = express.Router();

// Create a new Order
router.post('/create', order_controller.register);
// Retrieve a single Order with id
router.get('/find/:id', order_controller.getOrder);
// Retrieve all Order
router.get('/all', order_controller.getAllOrders);
// Delete a Order with id
router.put('/d/delete', checkToken, order_controller.remove);


export default router;