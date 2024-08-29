 const express = require('express');
const router = express.Router();
const uploads = require('../multer.js')

router.post('/SettingTaxCreate',uploads.single('image'), settingTaxCreate)
router.get('/SettingTaxGet',     GetSettinTax)


module.exports = router

 