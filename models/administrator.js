let mongoose = require('mongoose');

let administrator = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: "String",
        unique: "true",
    },

    phoneNumber: Number,


    password: String,
    status: String,

    confirmPassword: String,
    image:{
        type:String,
    }

});

module.exports = mongoose.model('AdministratorCollection', administrator);
