const mongoose = require("mongoose")

const employeesSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    confirmPassword: String,
    phoneNumber: Number,
    status:String,
    role: String
})
module.exports = mongoose.model("Employees", employeesSchema)