let PosOrder = require('../models/Posorder')

// ---------------------Add-Pos------------------




let createpos = async (req, res) => {
    let { OrderID, Customer, Amount, Date  } = req.body;
    			

    try {
        // Create the new user
        let newUser = await PosOrder.create({
            OrderID: OrderID,
            Customer: Customer,
            Amount: Amount,
            Date: Date, 
        });
        return res.status(201).json({ success: true, msg: "curtomer created successfully", details: newUser });

    } catch (error) {
        return res.status(500).json({ success: false, msg: "Error in creating customer", error: error.message });
    }
}




// --------------------Get-All-Pos----------------------

let GetAllpos=async(req,res)=>{
try {
let getallPos=await  PosOrder.find()
    return res.status(200).json({success:true,message:"get all exployees",getAllAdministrator})
} catch (error) {
    return res.status(200).json({success:false,error:error.message})
    
}
}


let deletePos=async(req,res)=>{
    let _id=req.params._id;
    try {
        let findPos=await PosOrder.findByIdAndDelete({_id:_id})
        if(findPos){
            return res.status(200).json({success:true,message:"pos deleted successfully",findEmployees})
        }
    } catch (error) {
        return res.status(400).json({success:"false",error:error.message})
    }
}


// ------------------Update-Administrator--------------------------

// exports.updatepos=async(req,res)=>{
//     let _id=req.params._id;
//     let {name,email,password,confirmPassword,phoneNumber,status}=req.body;
//     try {
//         let findCustomer=await administratorModel.findByIdAndUpdate({_id:_id})
//         if(findCustomer){
//     let updateCustomer= await administratorModel.updateOne({_id:_id}, { $set:{email: email,password:password,confirmPassword:confirmPassword,phoneNumber:phoneNumber,name:name,status:status}})

//             return res.send.json({success:true,message:"Employees updated successfully",updateCustomer})
//         }
//     } catch (error) {
//         return res.status(400).json({success:"false",error:error.message})
//     }
// }



// ------------------------------------------------Administrators-View-------------------------------

let viewpos =  async (req, res) => {
    let id = req.params.id
    let data = await PosOrder.find({ _id: id })
    res.json(data)
}
module.exports={
    createpos,
    GetAllpos,
    deletePos,
    viewpos,
}


