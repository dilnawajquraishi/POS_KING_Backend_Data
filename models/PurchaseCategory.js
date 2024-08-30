let mongoose=require('mongoose')

let PurchageCategory=new mongoose.Schema({
    tax:{
        type:String,

    },
    quantity :{
        type:Number
    },
    discunt:{
        type:Number

    },
    unitcost:{
        type:String,
    }
})
module.exports=mongoose.model("PurchageCategory",PurchageCategory)