let express=require('express')
const { settingRegister, getUser } = require('../controller/Setting')
let router=express.Router()


router.post('/settingcreate',settingRegister)

router.get('/settingGetalldata',getUser)

