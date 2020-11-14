const express = require('express');
const ProductController = require('../controllers/ProductController');
const router = express.Router();

router.get('/', ProductController.getProducts);
router.post('/', ProductController.addProduct);
router.delete('/:id', ProductController.deleteProduct);

module.exports = router;