let administratorModel = require('../models/administrator.js')
let bcryptjs = require('bcryptjs')

// ---------------------Add-Employee------------------


exports.newadministrator = async (req, res) => {
    let { name, password, confirmPassword, email, phoneNumber, status,image } = req.body;

    try {
        // Ensure password and confirmPassword are strings
        password = String(password);
        confirmPassword = String(confirmPassword);

        // Check if the user already exists
        let existingUser = await administratorModel.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ success: false, msg: "User already exists!" });
        }

        // Check if password and confirmPassword match
        if (password !== confirmPassword) {
            return res.status(400).json({ success: false, msg: "Passwords do not match" });
        }

        // Hash the password
        const salt = bcryptjs.genSaltSync(10);
        const hashPassword = bcryptjs.hashSync(password, salt);

        // Create the new user
        let newUser = await administratorModel.create({
            name: name,
            email: email,
            confirmPassword: confirmPassword,
            password: hashPassword, // Store the hashed password
            status: status,
            phoneNumber: phoneNumber,
            image:req.file.filename
        });

        return res.status(201).json({ success: true, msg: "User created successfully", details: newUser });
    } catch (error) {
        return res.status(500).json({ success: false, msg: "Error in creating user", error: error.message });
    }
}




// --------------------Get-All-Employees----------------------

exports.getAlladministrator=async(req,res)=>{
// let _id=req.params._id;
try {
let getAllAdministrator=await  administratorModel.find()
    return res.status(200).json({success:true,message:"get all exployees",getAllAdministrator})
} catch (error) {
    return res.status(200).json({success:false,error:error.message})
    
}
}


exports.deleteAdministrator=async(req,res)=>{
    let _id=req.params._id;
    try {
        let findEmployees=await administratorModel.findByIdAndDelete({_id:_id})
        if(findEmployees){
            return res.status(200).json({success:true,message:"Employees deleted successfully",findEmployees})
        }
    } catch (error) {
        return res.status(400).json({success:"false",error:error.message})
    }
}


// ------------------Update-Administrator--------------------------

exports.updateAdministrator=async(req,res)=>{
    let _id=req.params._id;
    let {name,email,password,confirmPassword,phoneNumber,status,image}=req.body;
    try {
        let findCustomer=await administratorModel.findByIdAndUpdate({_id:_id})
        if(findCustomer){
    let updateCustomer= await administratorModel.updateOne({_id:_id}, { $set:{email: email,password:password,confirmPassword:confirmPassword,phoneNumber:phoneNumber,name:name,status:status,image:req.file.filename}})

            return res.send.json({success:true,message:"Employees updated successfully",updateCustomer})
        }
    } catch (error) {
        return res.status(400).json({success:"false",error:error.message})
    }
}


// ------------------------------------------------Administrators-View-------------------------------

exports.viewAdministrator =  async (req, res) => {
    let id = req.params.id
    let data = await administratorModel.find({ _id: id })
    res.json(data)
}


