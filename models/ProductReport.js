const mongoose = require("mongoose");

let productschema = new mongoose.Schema({
    productName: String,
    sku: String,
    category: String,
    barcode: String,
    buyingprice: Number,
    sellingprice: Number,
    tax: String,
    brand: String,
    status: String,
    canpurchasable: String,
    showstockout: String,
    refundable: String,
    maximumpurchasequantity: String,
    lowstockquantitywarning: String,
    unit: String,
    weight: String,
    tags: String,
    description: String,
    image: String,
    initialStock: Number, // New field to track initial stock quantity
    soldQuantity: { type: Number, default: 0 }, // New field to track sold quantity
});

productschema.virtual('remainingQuantity').get(function () {
    return this.initialStock - this.soldQuantity;
});

module.exports = mongoose.model('ProductReport', productschema);
