const express = require('express');
const { createPurchageCategory, getPurchageCategory, deletePurchageCategory, updatePurchageCategory } = require('../controller/PurchaseCategory');
const router = express.Router();



router.post('/registerPurchaseCategory', createPurchageCategory)
router.get('/GetAllPurchaseCategory', getPurchageCategory)
router.delete('/deletePurchaseCategory/:_id',deletePurchageCategory)
router.put('/updatePurchaseCategory/:_id',updatePurchageCategory)

// router.get('/viewEmployees/:id',)


module.exports = router
