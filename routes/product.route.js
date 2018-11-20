const express = require('express');
let router = express.Router();

const productController = require('../controllers/product.controller');

router.get('/',productController.getProducts);
router.post('/',productController.createProducts);
// router.put('/:id', productController.updateTodo);
// router.delete('/:id', productController.deleteTodo);

module.exports = router;
