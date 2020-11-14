const express = require('express');
const CategoryController = require('../controllers/CategoryController');
const router = express.Router();

router.get('/', CategoryController.getCategory);

module.exports = router;