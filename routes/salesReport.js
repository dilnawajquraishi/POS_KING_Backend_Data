let express=require('express')
let router=express.Router()

const getSalesReport = require('../controller/SalesReport')

 router.get('/getSalesReport',getSalesReport)

 router.get('/dailyaverage', dailysale)

 module.exports=router;
