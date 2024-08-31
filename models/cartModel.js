const mongoose = require("mongoose");

let cartSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'productData'
    },
    quantity: {
        type: Number,
        default: 1
    },
    totalPrice: Number
});

module.exports = mongoose.model('Cart', cartSchema);
