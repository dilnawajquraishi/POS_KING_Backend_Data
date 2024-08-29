let express=require("express")
const uploads = require('../multer.js')

const { newSupplier, deleteSupplier, update_Supplier, viewSupplier, getAllSupplier } = require("../controller/SettingSupplier")


let router=express.Router()

router.post('/newsupplier',uploads.single('image'),newSupplier)


router.delete('/deletesupplier/_id',deleteSupplier)


router.put('/updatesupplier/:_id',update_Supplier)


router.get('/viewsupplier/_id',viewSupplier)


router.get('/getallsupplier',getAllSupplier)


module.exports=router
