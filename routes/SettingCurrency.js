
const express = require('express');
const { createCurrency, GetAllCurrency } = require('../controller/SettingCurrency');
const router = express.Router();

router.post('/createcurrency', createCurrency);



router.get('/getcurrency', GetAllCurrency);

module.exports = router;










