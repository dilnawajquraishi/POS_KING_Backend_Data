const express = require('express');
const router = express.Router();
const categoryController = require('../controller/allcategoryController.js');


router.post('/saveCategory', categoryController.saveCategory)


router.get('/getCategory', categoryController.getCategory)


router.get('/getProductByCategory/:alltypecategory', categoryController.getProductByCategory)

module.exports = router