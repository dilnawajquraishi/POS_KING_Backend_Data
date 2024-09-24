
const express = require('express');
const { deleteattributes, Createattributes, updateattributes, getAllattributes, viewSettingProductAttributs } = require('../controller/SettingProductAttributesColor');
// const { Createattributes, deleteattributes, updateattributes, getAllattributes, viewSettingProductAttributs } = require('../controller/SettingProductAttributes');

const router = express.Router();

router.post('/ceateProductAttributes', CreateattributesColor)

router.delete('/deleteProductAttributes/:_id', deleteattributesColor);

router.put('/updateProductAttributes/:_id', updateattributesColor);

router.get('/gretallProductAttributes', getAllattributesColor);

router.get('/viewProductAttributes/:_id',viewSettingProductAttributsColor);







module.exports = router;









