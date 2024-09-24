
const express = require('express');
const { CreateattributesColor, deleteattributesColor, updateattributesColor, getAllattributesColor, viewSettingProductAttributsColor } = require('../controller/SettingProductAttributesColor');


const router = express.Router();

router.post('/ceateProductAttributes', CreateattributesColor)

router.delete('/deleteProductAttributes/:_id', deleteattributesColor);

router.put('/updateProductAttributes/:_id', updateattributesColor);

router.get('/gretallProductAttributes', getAllattributesColor);

router.get('/viewProductAttributes/:_id',viewSettingProductAttributsColor);


module.exports = router;









