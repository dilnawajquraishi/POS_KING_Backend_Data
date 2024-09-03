const express = require('express');
const router = express.Router();
 let uploads=require("../multer.js")
const AddEmployeeRouter = require('../controller/addEmployeeController.js');
// const upload = require('../multer.js');



router.post('/registerEmployee', uploads.single('image'),AddEmployeeRouter.newemployess)
router.get('/getAllEmployees', AddEmployeeRouter.getAllEmployees)
router.delete('/deleteEmployees/:_id',AddEmployeeRouter.deleteEmployees)
router.put('/updateEmployees/:_id',uploads.single('image'),AddEmployeeRouter.updateEmployees)
router.get('/filterEmployees',AddEmployeeRouter.filterEmployee)
router.get('/viewEmployees/:id',AddEmployeeRouter.viewEmployees)


module.exports = router
