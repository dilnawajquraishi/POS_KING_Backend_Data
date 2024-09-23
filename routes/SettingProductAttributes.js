
const express = require('express');
const { Createattributes, deleteattributes, updateattributes, getAllattributes } = require('../controller/SettingProductAttributes');

const router = express.Router();

router.post('/ceateProductAttributes', Createattributes)

router.delete('/deleteProductAttributes/:_id', deleteattributes);


router.put('/updateProductAttributes/:_id', updateattributes);



router.get('/gretallProductAttributes', getAllattributes);




module.exports = router;









