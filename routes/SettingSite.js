
const express = require('express');

const router = express.Router();

router.post('/createcity', newSite);

router.delete('/deletecity', deleteSite);


router.put('/updateSite', updateSite);



router.get('/gretallcity', getAllSite);


router.get('/viewSite', viewSite);


module.exports = router;





