
const express = require('express');
const { settingBrandCreate, GetSettingBrand, SettingDeleteBrand, settingUpdateBrand, viewSettingBrand } = require('../controller/SettingBrand');
const router = express.Router();


// ----------------Setting_Brand-------------------

router.post('/addBrand', settingBrandCreate)

router.get('/getAllBrand', GetSettingBrand)

router.get('/viewBrand/:id', viewSettingBrand)

router.get('/updateBrand/:_id', settingUpdateBrand)

router.get('/deleteBrand/:_id', SettingDeleteBrand)


module.exports = router


