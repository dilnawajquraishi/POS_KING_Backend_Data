let mongoose=require('mongoose')


let ProductAttributesSize=new mongoose.Schema({
    size:{
        type:String,
    },
  
})

module.exports=mongoose.model("SettingProductAttributesSize",ProductAttributesSize)