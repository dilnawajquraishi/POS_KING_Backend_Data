

const express = require('express');
const { orderState } = require('../controller/Purchage');
const router = express.Router();
// const OrderDetailsController = require('../controllers/OrderDetailsController');

// Route to get all order details

router.get('/order', orderState);


module.exports = router;



