
const express = require('express');
const { createCountry, deleteCountry, GetAllCountry } = require('../controller/SettingCountry');
const router = express.Router();

router.post('/createCountry', createCountry);

router.delete('/deletecountry', deleteCountry);


router.get('/gelallcountry', GetAllCountry);



module.exports = router;





