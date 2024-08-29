

const express = require('express');
const { settingBrandCreate, GetSettingBrand } = require('../controller/SettingBrand');
const router = express.Router();


// ----------------Administrator-------------------

router.post('/addpos', settingBrandCreate)
router.get('/getallpos', GetSettingBrand)




module.exports = router


