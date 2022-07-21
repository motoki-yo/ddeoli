import express from 'express';
import { checkToken } from './auth.js'
import * as product_controller from '../controllers/product.controller.js'

const router = express.Router();

// Create a new Product
router.post('/create', product_controller.register);
// Retrieve a single Product with id
router.get('/find/:id', product_controller.getProduct);
// Retrieve all Products
router.get('/all', product_controller.getAllProducts);
// Update a Product with id
router.put('/:id', checkToken, product_controller.update);
router.put('/d/delete', checkToken, product_controller.remove);


export default router;