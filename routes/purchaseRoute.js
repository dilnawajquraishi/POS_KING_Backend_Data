const express = require('express');
const uploads = require('../multer.js')

const { purchage, delete_purchage_product,purchage_update,getAllPurchages } = require('../controller/Purchage');
const { updateCategory, getAllCategories, deleteCategory, createCategory } = require('../controller/PurchaseCategory');
const router = express.Router();
// ***********************Purchage******************
router.post('/purchage_create',uploads.single('image'),purchage)
router.delete('/purchage_deleted/:_id',delete_purchage_product)
router.put('/purchage_updated/:_id',  uploads.single('image') ,purchage_update)
// router.get('/purchageFilter/:key',filter_purchage)
router.get('/purchagefinddata',getAllPurchages)

// ----------------------------PurchageCategory----------------------------
// routes/categoryRoutes.js

// const categoryController = require('../controllers/categoryController'); // Adjust the path as needed

// Route to create a new category
router.post('/categories/create', createCategory);

// Route to delete a category by ID
router.delete('/categories/delete/:_id', deleteCategory);

// Route to get all categories
router.get('/categories/getalldata', getAllCategories);

// Route to update a category by ID
router.put('/categories/update/:_id', updateCategory);

module.exports=router