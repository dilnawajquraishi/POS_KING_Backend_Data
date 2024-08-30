

const express = require('express');
const { getAllPermmission } = require('../controller/RolesPermission');
const router = express.Router();

router.post('/newPermission', newePemission);

router.put('/updatePermission', updatePermission);

router.get('/',getAllPermmission);

router.get('/viewPermission',viewPermission);


router.delete('/delete', deletePermission);


module.exports = router;




