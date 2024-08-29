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

    },
  
    Date,PaymentStatus,total:{
        type:mongoose.Schema.Types.ObjectId,ref:"purchage",
    },




});

module.exports = mongoose.model('SalesReport', SalesReport);
	 		
