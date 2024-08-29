

const express = require('express');
const { createState, deleteState, GetAllState } = require('../controller/SettingSate');
const router = express.Router();

router.get('/createState', createState);

router.get('/deleteState', deleteState);


router.get('/gelallState', GetAllState);

module.exports = router;









