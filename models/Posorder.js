const mongoose = require("mongoose")

let productschema = new mongoose.Schema({
   
    OrderID:Number,
    Customer:String,
    Amount:String,
    Date:Date,
    Amount:Number,
    

})


module.exports = mongoose.model('PosOrder', productschema)





