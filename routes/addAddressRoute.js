const express = require('express');
const router = express.Router();
const addAddressController = require('../controller/addAddressController.js');

router.post('/employeeAddress/:_id', addAddressController.createdaddressDetails)
router.get('/getAllEmployeesAdddress', addAddressController.employAllAddress)

router.delete('/deleteAddAddress/:_id', addAddressController.deleteAddress)


router.put('/updateAddAddress/:_id', addAddressController.updateAdministrator)






module.exports = router
