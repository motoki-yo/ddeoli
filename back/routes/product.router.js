import express from 'express';
import { checkToken } from './auth.js'
import * as product_controller from '../controllers/product.controller.js'

const router = express.Router();

router.post('/register', product_controller.register);
router.get('/:id', product_controller.getProduct);
router.put('/:id', checkToken, product_controller.update);

module.exports = app => {
  // Create a new Product
  router.post('/adm', product_controller.register);
  // Retrieve all Tutorials
  router.get("/adm", tutorials.findAll);
  // Retrieve all published Tutorials
  router.get("/adm", tutorials.findAllPublished);
  // Retrieve a single Tutorial with id
  router.get("/adm:id", tutorials.findOne);
  // Update a Tutorial with id
  router.put("/adm:id", tutorials.update);
  // Delete a Tutorial with id
  router.delete("/adm:id", tutorials.delete);

  
  app.use('/products', router);
};

export default router;