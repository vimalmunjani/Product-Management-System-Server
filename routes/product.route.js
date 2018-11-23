const express = require('express');
let router = express.Router();

const productController = require('../controllers/product.controller');

router.get('/',productController.getProducts);
router.get('/:id',productController.getProductById);
router.post('/',productController.createProduct);

// router.put('/:id', productController.updateTodo);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
