import express from 'express';
import { checkToken } from './auth.js'
import * as product_controller from '../controllers/product.controller.js'

const router = express.Router();

router.post('/register', product_controller.register);
router.get('/:id', product_controller.getProduct);
router.put('/:id', checkToken, product_controller.update);

export default router;