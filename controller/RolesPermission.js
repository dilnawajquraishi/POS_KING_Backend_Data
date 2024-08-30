const RolesPermission = require('../models/Role&Permission');

// ---------------------Add-------------------

let newePemission = async (req, res) => {
    let { name } = req.body;
    let _id=req.params._id;

    try {

                   
            let newpermission = await RolesPermission.create({
                name: name,
               
            });

            return res.status(201).json({ success: true, msg: "User created successfully", newpermission });

      
    } catch (error) {
        return res.status(500).json({ success: false, msg: "Error in creating user", error: error.message });
    }
}

// --------------------Get-All-Employees----------------------

let getAllPermmission  = async (req, res) => {
    let data = await RolesPermission.find({})
    res.json(data)
}





let deletePermission = async(req,res)=>{
    let _id = req.params._id;
    try {
        let findEmployees = await RolesPermission.findByIdAndDelete({_id: _id})
        if(findEmployees){
            return res.status(200).json({success:true,message:"RolesPermission deleted successfully",findEmployees})
        }
    } catch (error) {
        return res.status(400).json({success:"false",error:error.message})
    }
}


// ------------------Update-Employees--------------------------

let updatePermission=async(req,res)=>{
    let _id=req.params._id;
    let {name}=req.body;
    try {
        let finduser=await RolesPermission.findByIdAndUpdate({_id:_id})
        if(finduser){
    let updateEmployee = await RolesPermission.updateOne({_id:_id}, { $set:{name:name } })

            return res.status(200).json({success:true,message:"Permissiion  updated successfully",updateEmployee})
        }
    } catch (error) {
        return res.status(400).json({success:"false",error:error.message})
    }
}




let viewPermission =  async (req, res) => {
    let id = req.params.id
    let data = await RolesPermission.find({ _id: id })
    res.json(data)
}


module.exports={
    newePemission,
    updatePermission,
    viewPermission,
    deletePermission,
    getAllPermmission
}