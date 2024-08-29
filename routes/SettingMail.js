let express=require('express')
const { GetEmail, settingEmail } = require('../controller/SettingEmail')

let router=express.Router()

router('/settingEmailCreate',settingEmail)

router('/settingEmailGetAll',GetEmail
)



module.exports=router
