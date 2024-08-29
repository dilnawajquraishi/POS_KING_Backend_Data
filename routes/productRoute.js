const express = require('express');
const router = express.Router();
const uploads = require('../multer.js')
const productController = require('../controller/productController.js');


router.post('/saveProduct', uploads.single('image'), productController.saveProduct)
// router.get('/getProduct', productController.getProduct)
router.get('/getproductFilter', productController.getProductByfilter)
router.get('/viewProduct/:id', productController.viewProduct)
router.put('/updateProduct/:id', uploads.single('image'), productController.updateProduct)
router.delete('/deleteProduct/:id', productController.deleteProduct)
router.get('/getProductByName/:productName', productController.getProductByName)
router.get('/searchProduct', productController.searchProduct)
router.get('/totalgetNumberProduct', productController.getTotalUsers)






module.exports = router