const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  website: {
    type: String,
  },
  state: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  countryCode: {
    type: String,
    required: true,
  },
  address:{
    type:String
  },
  address:{
    type:String,
    userId:{
      type:String,
    },
  }
});

module.exports = mongoose.model('Company', CompanySchema);
