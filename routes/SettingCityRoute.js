
const express=require('express');
const { createCity, deleteCity, GetAllCity, updateCity } = require('../controller/SettingCity');

const router = express.Router();

router.post('/createcity', createCity);

router.delete('/deletecity/:_id', deleteCity);


router.get('/gretallcity', GetAllCity);

router.put('/UpdateCity/:_id', updateCity);



module.exports = router;





