let mongoose = require('mongoose');

let settingUnit = new mongoose.Schema({
    name: {
        type: String,
    },
    code: {
        type: "String",
    },   

    status: {
        type: String,
         enum: ['active', 'inactive'],
    },

});

module.exports = mongoose.model('SettingUnitCollection', settingUnit);
