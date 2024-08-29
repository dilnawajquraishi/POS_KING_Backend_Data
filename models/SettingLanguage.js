let mongoose=require('mongoose')
let purchageschema=new mongoose.Schema({
 
 name:{
    type:"String",
 },
 code:{
    type:String,
 },

    
    
        displaMode: {
            type: String,
            enum: {values: ['LTR', 'RTL'], message: 'displaMode is required.'},
            trim: true
          },
    
          status: {
            type: String,
            enum: {values: ['Active', 'inactive'],},
            trim: true
          },
    
    
          image:{
      type:String
     }

})
module.exports=mongoose.model("purchage",purchageschema)