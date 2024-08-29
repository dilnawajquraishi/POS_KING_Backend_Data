const express = require('express');
const router = express.Router();
const AddEmployeeRouter = require('../controller/addEmployeeController.js');



router.post('/registerEmployee', AddEmployeeRouter.newemployess)
router.get('/getAllEmployees', AddEmployeeRouter.getAllEmployees)
router.delete('/deleteEmployees/:_id',AddEmployeeRouter.deleteEmployees)
router.put('/updateEmployees/:_id',AddEmployeeRouter.updateEmployees)
router.get('/filterEmployees',AddEmployeeRouter.filterEmployee)
router.get('/viewEmployees/:id',AddEmployeeRouter.viewEmployees)


module.exports = router
