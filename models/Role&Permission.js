const mongoose = require("mongoose")

const RolesPermission = new mongoose.Schema({
    name: String,
   
})
module.exports = mongoose.model("RolesPermission", RolesPermission)