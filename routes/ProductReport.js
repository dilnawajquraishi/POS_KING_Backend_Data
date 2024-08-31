const express = require('express');
const router = express.Router();
// const productController = require('../controller/productController');
const { getProductInventory } = require('../controller/ProductReport');

// router.get('/product/inventory', productController.getProductInventory);
router.get('/product/inventory',getProductInventory);


module.exports = router;
