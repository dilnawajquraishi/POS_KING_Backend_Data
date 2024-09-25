
const express = require('express');
const { Createattributes, deleteattributes, updateattributes, getAllattributes, viewSettingProductAttributs } = require('../controller/SettingProductAttributes');

const router = express.Router();

router.post('/ceateProductAttributesSize', Createattributes)

router.delete('/deleteProductAttributesSize/:_id', deleteattributes);

router.put('/updateProductAttributesSize/:_id', updateattributes);

router.get('/gretallProductAttributesSize', getAllattributes);

router.get('/viewProductAttributesSize/:id', viewSettingProductAttributs);





module.exports = router;









