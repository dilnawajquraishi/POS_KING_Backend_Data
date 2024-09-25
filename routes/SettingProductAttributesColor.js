
const express = require('express');
const { CreateattributesColor, deleteattributesColor, updateattributesColor, getAllattributesColor, viewSettingProductAttributsColor } = require('../controller/SettingProductAttributesColor');


const router = express.Router();

router.post('/ceateProductAttributesColor', CreateattributesColor)

router.delete('/deleteProductAttributesColor/:_id', deleteattributesColor);

router.put('/updateProductAttributesColor/:_id', updateattributesColor);

router.get('/gretallProductAttributesColor', getAllattributesColor);

router.get('/viewProductAttributesColor/:id',viewSettingProductAttributsColor);


module.exports = router;









