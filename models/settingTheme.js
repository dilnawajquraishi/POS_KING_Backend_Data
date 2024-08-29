let mongoose=require("mongoose")
let thememodel=new mongoose.Schema({
    logo:{
type:String,
    },
    favicon:{
        type:String,

    },
    
    footerlogo:{
        type:String,

    },
    

})
module.exports=mongoose.model("ThemeCollection",thememodel)