const mongoose = require('mongoose');

const TaxRateModel = new mongoose.Schema({
  name: {
    type: String,

  },
  status: {
    type: Number,
    enum: ['active', "inactive"],

  },
  code: {
    type: String,
  },
  taxRate: {
    type: Number,
    required: true,
  },
 
});

module.exports = mongoose.model('TaxRate', TaxRateModel);
