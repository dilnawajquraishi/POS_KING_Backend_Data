let mongoose=require('mongoose')


let settingProductCategory=new mongoose.Schema({
    name:{
        type:String,
    },
    parentCategory:{
        type:String,
    },
    status:{
        enum:["active","inactive"]
    },
    description:{
        type:String,
      },
      image:{
        type:String,
      }
})

module.exports=mongoose.model("SettingParentCategory",settingProductCategory)