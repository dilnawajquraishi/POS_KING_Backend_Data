const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/product/inventory', productController.getProductInventory);

module.exports = router;
