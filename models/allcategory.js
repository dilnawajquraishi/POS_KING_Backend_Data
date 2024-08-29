const mongoose = require("mongoose")


const categorySchema = new mongoose.Schema({
    alltypecategory: String,
    barcode: String,
    tax: String,
    brand: String, 
    unit: String
})


module.exports = mongoose.model('categoryData', categorySchema)