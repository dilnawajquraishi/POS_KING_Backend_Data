
const express = require('express');
const { settingBrandCreate, GetSettingBrand, SettingDeleteBrand, settingUpdateBrand, viewSettingBrand } = require('../controller/SettingBrand');
const router = express.Router();

// ----------------Setting_Brand-------------------

router.post('/addBrand', uploads.single('image'),settingBrandCreate)


// router.put('/updateProduct/:id', , productController.updateProduct)

router.get('/getAllBrand', GetSettingBrand)

router.get('/viewBrand/:id', viewSettingBrand)

router.put('/updateBrand/:_id',uploads.single('image'), settingUpdateBrand)

router.delete('/deleteBrand/:_id', SettingDeleteBrand)


module.exports = router


