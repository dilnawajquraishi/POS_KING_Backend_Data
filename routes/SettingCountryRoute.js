
const express = require('express');
const { createCountry, deleteCountry, GetAllCountry, updateCountry } = require('../controller/SettingCountry');
const router = express.Router();

router.post('/createCountry', createCountry);


router.delete('/deletecountry/:_id', deleteCountry);


router.put('/updatecountry/:_id', updateCountry);


router.get('/gelallcountry', GetAllCountry);


module.exports = router;





