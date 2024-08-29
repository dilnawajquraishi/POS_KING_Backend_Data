

const express = require('express');
const { createpos, GetAllpos, deletePos, viewpos } = require('../controller/PosOrder');
const router = express.Router();


// ----------------Administrator-------------------

router.post('/addpos', createpos )
router.get('/getallpos', GetAllpos)
router.delete('/deletepos/:_id',deletePos)
router.get('/viewpos/:_id',viewpos)



module.exports = router


