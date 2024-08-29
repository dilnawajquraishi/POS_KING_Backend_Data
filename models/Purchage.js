let mongoose=require('mongoose')
let purchageschema=new mongoose.Schema({
    created_at:
     { type: Date, 
        default: Date.now },
        refrenceno:{
        type:Number,
     },
 name:{
    type:"String",
 },
 supplier:{
    type:"String",
 },
     purchage:
      { type: "String",
         trim: "true" ,
         data:"Buffer",
        },
    
        paymentstatus: {
            type: String,
            enum: {values: ['pending', 'order','receive'], message: 'Status is required.'},
            trim: true
          },
    
      
        PurchageCategory: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'PurchageCategory'
     },
     image:{
      type:String
     }

})
module.exports=mongoose.model("purchage",purchageschema)