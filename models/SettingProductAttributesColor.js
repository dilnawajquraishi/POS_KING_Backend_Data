let mongoose=require('mongoose')


let ProductAttributesColor=new mongoose.Schema({
    color:{
        type:String,
    },
  
})

module.exports=mongoose.model("SettingProductAttributesColor",ProductAttributesColor)