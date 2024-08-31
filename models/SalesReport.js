let mongoose = require('mongoose');

let SalesReport = new mongoose.Schema({
    OrderId:{
type:mongoose.Schema.Types.ObjectId,ref:"PosOrder"
    },
    Discount:{

    },
    ShippingCharge:{

    },
    PaymentType:{
        type:mongoose.Schema.Types.ObjectId,ref:"purchage",

    },
  
    Date,total:{
        type:mongoose.Schema.Types.ObjectId,ref:"purchage",
    },
    Date:{
        type:mongoose.Schema.Types.ObjectId,ref:"purchage",
    },




});

module.exports = mongoose.model('SalesReport', SalesReport);
	 		
