const express = require('express');
const router = express.Router();

let uploads=require('../multer.js')
const administratorRouter = require('../controller/administratorController.js');


// ----------------Administrator-------------------

router.post('/addAdministrator', uploads.single('image') ,administratorRouter.newadministrator)
router.get('/getAllAdministrator', administratorRouter.getAlladministrator)
router.delete('/deleteAdministrator/:_id', administratorRouter.deleteAdministrator)
router.put('/updateAdministrator/:_id',uploads.single('image'),administratorRouter.updateAdministrator)
router.get('/viewAdministrator/:_id',administratorRouter.viewAdministrator)


module.exports = router
