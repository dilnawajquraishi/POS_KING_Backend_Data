let mongoose=require('mongoose')


let ProductAttributes=new mongoose.Schema({
    name:{
        type:String,
    },
  
})

module.exports=mongoose.model("SettingProductAttributes",ProductAttributes)