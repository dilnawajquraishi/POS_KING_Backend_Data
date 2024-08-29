const express = require('express');
const saledetails = require('../controller/SaleDetails');
const router = express.Router();



router.post('/graph', saledetails)



module.exports = router
