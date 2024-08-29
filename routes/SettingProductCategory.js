const express = require('express');
const uploads = require('../multer.js')
const { CreateCategory, getAllCategoy, deleteCategory, updateCategory } = require('../controller/SettingProductCategory');
const router = express.Router();



router.post('/newcategory',uploads.single('image'),CreateCategory)
router.get('/getAllCategory', getAllCategoy)
router.delete('/deleteCategory/:_id',deleteCategory)
router.put('/updateCategory/:_id',uploads.single("image"),updateCategory)


module.exports = router
