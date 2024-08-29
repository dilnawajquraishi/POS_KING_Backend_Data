const mongoose = require('mongoose');

// Define the schema for OrderDetails
let purchageschema = new mongoose.Schema({
    created_at: { 
        type: Date, 
        default: Date.now 
    },
    refrenceno: {
        type: Number,
    },
    // Reference to the `purchage` collection
    purchage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "purchage"
    },
    // Reference to the `PurchageCategory` collection
    PurchageCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PurchageCategory'
    }
});

module.exports = mongoose.model("OrderStats", purchageschema);