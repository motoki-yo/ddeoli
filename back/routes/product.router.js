import express from 'express';
import { checkToken } from './auth.js'
import * as product_controller from '../controllers/product.controller.js'

const router = express.Router();

// Create a new Product
router.post('/register', product_controller.register);
// Retrieve a single Product with id
router.get('/:id', product_controller.getProduct);
// Update a Product with id
router.put('/:id', checkToken, product_controller.update);

export default router;