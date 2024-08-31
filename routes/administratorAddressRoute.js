const express = require('express');
const { AdministratorAddressDetails, AdminstratorAllAddress, updateAdministratorAddress, deleteAdministratorAddress, viewAdministratorAddress } = require('../controller/AdministratorAddress');
const router = express.Router();



router.post('/registerEmployee', AdministratorAddressDetails)
router.get('/getAllAdministratorAddress', AdminstratorAllAddress)
router.put('/UpdateAdministratorAddress', updateAdministratorAddress)
router.delete('/deleteAdministratorAddress', deleteAdministratorAddress)
router.get('/viewAdministratorAddress', viewAdministratorAddress)



    

module.exports = router
