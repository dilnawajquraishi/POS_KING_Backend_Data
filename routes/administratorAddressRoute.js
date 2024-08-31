const express = require('express');
const { AdministratorAddressDetails, AdminstratorAllAddress, updateAdministratorAddress, deleteAdministratorAddress, viewAdministratorAddress } = require('../controller/AdministratorAddress');

const router = express.Router();



router.post('/registerEmployee', AdministratorAddressDetails)
router.get('/getAllAdministratorAddress', AdminstratorAllAddress)
router.put('/UpdateAdministratorAddress/:_id', updateAdministratorAddress)
router.delete('/deleteAdministratorAddress/:_id', deleteAdministratorAddress)
router.get('/viewAdministratorAddress/:_id', viewAdministratorAddress)



    

module.exports = router
