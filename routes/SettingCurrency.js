
const express = require('express');
const { createCurrency, GetAllCurrency } = require('../controller/SettingCurrency');
const router = express.Router();

router.get('/createcurrency', createCurrency);



router.get('/getcurrency', GetAllCurrency);

module.exports = router;










