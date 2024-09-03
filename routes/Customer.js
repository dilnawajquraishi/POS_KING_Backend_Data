let express=require("express")
let uploads=require("../multer.js")
const { newCustomer, getAllCustomer, CustomerFilter, viewCustomer,  deleteCustomer, updateCustomer } = require("../controller/AddCustomer")

let router=express.Router()



// -----------------Customer------------------

router.post('/addCustomer',newCustomer)
router.get('/getAllCustomer',getAllCustomer)

router.delete('/deleteCustomer/:_id',uploads.single('image'),deleteCustomer)
router.put('/updateCustomer/:_id',updateCustomer)

router.get('/filterCustomer',uploads.single('image'),CustomerFilter)
router.get('/viewCustomer/:id',viewCustomer)