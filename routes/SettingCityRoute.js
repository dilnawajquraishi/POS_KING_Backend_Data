
const express = require('express');
const { createCity, deleteCity, GetAllCity } = require('../controller/SettingCity');

const router = express.Router();

router.post('/createcity', createCity);

router.delete('/deletecity', deleteCity);


router.get('/gretallcity', GetAllCity);



module.exports = router;





