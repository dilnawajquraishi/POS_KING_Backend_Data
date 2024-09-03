let express=require("express")
let uploads=require("../multer.js")
const { newCustomer, getAllCustomer, CustomerFilter, viewCustomer,  deleteCustomer, updateCustomer } = require("../controller/AddCustomer")

let router=express.Router()



// -----------------Customer------------------

router.post('/addCustomer',uploads.single('image'),newCustomer)
router.get('/getAllCustomer',getAllCustomer)

router.delete('/deleteCustomer/:_id',deleteCustomer)
router.put('/updateCustomer/:_id',uploads.single('image'),updateCustomer)

router.get('/filterCustomer',CustomerFilter)
router.get('/viewCustomer/:id',viewCustomer)