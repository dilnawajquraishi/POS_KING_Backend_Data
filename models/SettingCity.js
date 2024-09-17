let mongoose=require('mongoose')
let city=new mongoose.Schema({
    cityName:{
        type:String,
    },
    stateName:{
        type:String,
    },

   
    status:{
        enum:["active","inactive"]
    },
    userId:{
        type:String,
      }
})
module.exports=mongoose.model("cityCollection",city)