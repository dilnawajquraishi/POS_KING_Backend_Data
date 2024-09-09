

const express = require('express');
const { createState, deleteState, GetAllState, updateState } = require('../controller/SettingSate');
const router = express.Router();

router.post('/createState', createState);

router.delete('/deleteState/:_id', deleteState);


router.put('/stateUpdate/:_id', updateState);


router.get('/gelallState', GetAllState);

module.exports = router;








