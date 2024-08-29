let express=require("express")
const { createLanguage, getLanguage } = require("../controller/SettingLanguage")
let router=express.Router()

router.post('/addlanguage',createLanguage)

router.post('/Get All language',getLanguage)



module.exports=router

