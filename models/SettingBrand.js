const mongoose = require('mongoose');

const Settingbrand = new mongoose.Schema({
  name: {
    type: String,

  },
  status: {
    type: String,

  },
  image:{
    type:String,
  },
  description: {
    type: String,
  },

});

module.exports = mongoose.model('SettingbrandCollection', Settingbrand);
