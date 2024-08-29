
const express = require('express');
const { Createattributes, deleteattributes, updateattributes, getAllattributes } = require('../controller/SettingProductAttributes');

const router = express.Router();

router.post('/createcity', Createattributes)

router.delete('/deletecity/:_id', deleteattributes);


router.put('/updateSite/:_id', updateattributes);



router.get('/gretallcity', getAllattributes);




module.exports = router;









