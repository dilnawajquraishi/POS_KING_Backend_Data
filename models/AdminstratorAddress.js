let mongoose=require('mongoose')

let AdministratorAddressSchema=new mongoose.Schema({
    name:String,

    email:String,

    city:String,

    state:String,

    country:String,

    zipCode:String,


    phoneNumber:Number,

    streetCode:String,
   

  
})
module.exports=mongoose.model("AdministratorAddressDetails",AdministratorAddressSchema)