const mongoose = require("mongoose")

let productschema = new mongoose.Schema({
    productName : String, 
    sku : String,
    category : String,
    barcode : String,
    buyingprice : Number,
    sellingprice : Number,
    tax : String,
    brand : String,
    paymentstatus : String,
    canpurchasable : String,
    showstockout : String,
    refundable : String, 
    maximumpurchasequantity : String,
    lowstockquantitywarning : String,
    unit : String,
    weight : String,
    tags : String,
    description  : String,
    image: String
})


module.exports = mongoose.model('productData', productschema)