const employeesmodel = require('../models/addEmployee.js');
const bcryptjs = require('bcryptjs');

// ---------------------Add-Employee------------------

exports.newemployess = async (req, res) => {
    let { name, password, confirmPassword, email, status, role, phoneNumber } = req.body;

    try {
        let employeesfind = await employeesmodel.findOne({ email: email });

        if (!employeesfind) {
            // Check if password and confirmPassword match
            if (password !== confirmPassword) {
                return res.status(400).json({ success: false, msg: "Passwords do not match" });
            }
            const salt = await bcryptjs.genSalt(10);  // Using async version
            const hashPassword = await bcryptjs.hash(password, salt); // Using async version

            let details = await employeesmodel.create({
                name: name,
                email: email,
                password: hashPassword,
                confirmPassword: hashPassword,
                phoneNumber: phoneNumber,
                role: role,
                status: status,
            });

            return res.status(201).json({ success: true, msg: "User created successfully", details });

        } else {
            return res.status(409).json({ success: false, msg: "User already exists!" });
        }
    } catch (error) {
        return res.status(500).json({ success: false, msg: "Error in creating user", error: error.message });
    }
}

// --------------------Get-All-Employees----------------------

exports.getAllEmployees  = async (req, res) => {
    let data = await employeesmodel.find({})
    res.json(data)
}





exports.deleteEmployees = async(req,res)=>{
    let _id = req.params._id;
    try {
        let findEmployees = await employeesmodel.findByIdAndDelete({_id: _id})
        if(findEmployees){
            return res.status(200).json({success:true,message:"Employees deleted successfully",findEmployees})
        }
    } catch (error) {
        return res.status(400).json({success:"false",error:error.message})
    }
}


// ------------------Update-Employees--------------------------

exports.updateEmployees=async(req,res)=>{
    let _id=req.params._id;
    let {name,email,password,confirmPassword,phoneNumber,address,status}=req.body;
    try {
        let findEmployees=await employeesmodel.findByIdAndUpdate({_id:_id})
        if(findEmployees){
    let updateEmployee = await employeesmodel.updateOne({_id:_id}, { $set:{email: email,password:password,confirmPassword:confirmPassword,address:address,phoneNumber:phoneNumber,name:name,status:status } })

            return res.status(200).json({success:true,message:"Employees updated successfully",findEmployees})
        }
    } catch (error) {
        return res.status(400).json({success:"false",error:error.message})
    }
}



// ------------------------------filter-Employee-------------------------
exports.filterEmployee = async (req, res) => {
    const { name, email, phoneNumber } = req.query;
    const queryItem = {};

    if (name) {
        queryItem.name = { $regex: name, $options: "i" }; // 'i' for case-insensitive search
    }
    if (email) {
        queryItem.email = email;
    }
    if (phoneNumber) {
        queryItem.phoneNumber = phoneNumber;
    }

    console.log(queryItem);
    const data = await employeesmodel.find(queryItem);
    res.json(data);
};




exports.viewEmployees =  async (req, res) => {
    let id = req.params.id
    let data = await employeesmodel.find({ _id: id })
    res.json(data)
}