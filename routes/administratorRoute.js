const express = require('express');
const router = express.Router();
const administratorRouter = require('../controller/administratorController.js');


// ----------------Administrator-------------------

router.post('/addAdministrator',  administratorRouter.newadministrator)
router.get('/getAllAdministrator', administratorRouter.getAlladministrator)
router.delete('/deleteAdministrator/:_id', administratorRouter.deleteAdministrator)
router.put('/updateAdministrator/:_id',administratorRouter.updateAdministrator)
router.get('/viewAdministrator/:_id',administratorRouter.viewAdministrator)



module.exports = router
