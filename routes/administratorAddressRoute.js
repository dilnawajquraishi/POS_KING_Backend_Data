const express = require('express');
const { AdministratorAddressDetails, AdminstratorAllAddress } = require('../controller/AdministratorAddress');
const router = express.Router();



router.post('/registerEmployee', AdministratorAddressDetails)
router.get('/getAllEmployees', AdminstratorAllAddress
)



module.exports = router
