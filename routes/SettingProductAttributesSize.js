


const express = require('express');
const { CreateattributesSize, deleteattributesSize, updateattributesSize, getAllattributesSize, viewSettingProductAttributsSize } = require('../controller/SettingProductAttributesSize');


const router = express.Router();

router.post('/createProductAttributesSize', CreateattributesSize)

router.delete('/deleteProductAttributesSize/:_id', deleteattributesSize);

router.put('/updateProductAttributesSize/:_id', updateattributesSize);

router.get('/getallProductAttributesSize', getAllattributesSize);

// router.get('/viewProductAttributesSize/:id', viewSettingProductAttributsSize);

router.get('/viewProductAttributesSize/:_id', viewSettingProductAttributsSize);




module.exports = router;









