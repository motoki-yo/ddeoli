import express from 'express';

import userRouter from './user.router.js';
import productRouter from './product.router.js';
import orderRouter from './order.router.js';

const router = express.Router();
router.use('/user', userRouter);
router.use('/product', productRouter);
router.use('/product', orderRouter);

export default router;