let express=require("express")
const createtheme = require("../controller/SettingTheme")
let router=express.Router()
router.get('/themelogo',uploads.single('image'), createtheme)


module.exports=router