let attributes=require("../models/SettingProductAttributes")
let Createattributes=async(req,res)=>{
    let {name}=req.body;

    try {
        let category=await attributes.create({
            name:name,
           


        })
        return res.status(200).json({success:true,message:"category created successfully",category})
    } catch (error) {
        return res.status(400).json({success:false,error:error.message})
        
    }
}



// -----------------------------------------------------------------Delete_Supplier-----------------------------------

let deleteattributes = async (req, res) => {
    try {
        let result = await attributes.findByIdAndDelete(req.params._id);
        if (!result) {
            return res.status(404).json({ success: false, message: "attributes deleted successfully" });
        }
        return res.status(200).json({ success: true, message: "attributes deleted successfully" });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};


// -----------------------------------------------------------------Get_ALL_Supplier-----------------------------------


let getAllattributes=async(req,res)=>{
    try {
        let findgetdata=await  attributes.find({})
        return res.status(200).json({success:true,message:"get all data",findgetdata})
    } catch (error) {
        return res.status(500).json({success:false,error:error.message})
        
    }
}


// -----------------------------------------------------------------UpdateSupplier----------------------------------








let updateattributes=async(req,res)=>{
    let _id=req.params._id;
    let {name}=req.body;
    try {
        let findEmployees=await attributes.findByIdAndUpdate({_id:_id})
        if(findEmployees){
    let updateEmployee = await attributes.updateOne({_id:_id}, { $set:{name:name} })

            return res.status(200).json({success:true,message:"Employees updated successfully",findEmployees})
        }
    } catch (error) {
        return res.status(400).json({success:"false",error:error.message})
    }
}


// let updateattributes = async (req, res) => {
//     let _id = req.params._id;
//     let { name } = req.body;

//     try {
//         // Use findByIdAndUpdate directly to find and update in one step
//         let updatedEmployee = await attributes.findByIdAndUpdate(
//             _id,
//             { $set: { name } },
//             { new: true, runValidators: true } // Return the updated document and run validators
//         );

//         // Check if the employee was found and updated
//         if (updatedEmployee) {
//             return res.status(200).json({
//                 success: true,
//                 message: "Employee updated successfully",
//                 data: updatedEmployee
//             });
//         } else {
//             return res.status(404).json({ success: false, message: "Employee not found" });
//         }
//     } catch (error) {
//         return res.status(400).json({ success: false, error: error.message });
//     }
// };










// ----------------------------Setting Product Attributes View---------------------------

let viewSettingProductAttributs =  async (req, res) => {
    let id = req.params.id
    let data = await attributes.find({ _id: id })
    res.json(data)
}


module.exports={
    Createattributes,
    deleteattributes,
    getAllattributes,
    updateattributes,
    viewSettingProductAttributs
}
