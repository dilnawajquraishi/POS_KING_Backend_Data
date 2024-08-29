 
 
 const express = require('express');
const { newUnit, deleteUnit, updateUnit, getAllUnit, viewUnit } = require('../controller/SettingUnit');
 const router = express.Router();
 
 router.post('/newUnit', newUnit)


 router.delete('/deleteUnit',     deleteUnit)

 router.put('/updateUnit', updateUnit)


 router.get('/GetAllData',getAllUnit)


 router.get('/ViewUnit', viewUnit)

 
 
 module.exports = router
 
