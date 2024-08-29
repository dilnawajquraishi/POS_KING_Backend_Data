const mongoose = require('mongoose');

const Settingbrand = new mongoose.Schema({
  name: {
    type: String,

  },
  status: {
    type: Number,
    enum: ['active', "inactive"],

  },
  description: {
    type: String,
  },

});

module.exports = mongoose.model('SettingbrandCollection', Settingbrand);
