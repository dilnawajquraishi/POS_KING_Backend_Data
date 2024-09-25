let attributes=require("../models/SettingProductAttributesColor")
let CreateattributesColor=async(req,res)=>{
    let {color}=req.body;

    try {
        let ColorAdd=await attributes.create({
            color:color,
           


        })
        return res.status(200).json({success:true,message:"category created successfully",ColorAdd})
    } catch (error) {
        return res.status(400).json({success:false,error:error.message})
        
    }
}



// -----------------------------------------------------------------Delete_Supplier-----------------------------------

let deleteattributesColor = async (req, res) => {
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


let getAllattributesColor=async(req,res)=>{
    try {
        let findgetdata=await  attributes.find({})
        return res.status(200).json({success:true,message:"get all data",findgetdata})
    } catch (error) {
        return res.status(500).json({success:false,error:error.message})
        
    }
}


// -----------------------------------------------------------------UpdateSupplier-----------------------------------








// let updateattributes=async(req,res)=>{
//     let _id=req.params._id;
//     let {name}=req.body;
//     try {
//         let findEmployees=await settingProductCategory.findByIdAndUpdate({_id:_id})
//         if(findEmployees){
//     let updateEmployee = await settingProductCategory.updateOne({_id:_id}, { $set:{name:name} })

//             return res.status(200).json({success:true,message:"Employees updated successfully",findEmployees})
//         }
//     } catch (error) {
//         return res.status(400).json({success:"false",error:error.message})
//     }
// }


let updateattributesColor = async (req, res) => {
    let _id = req.params._id;
    let { color} = req.body;

    try {
        // Update the address and return the updated document
        let updatedColor = await attributes.findByIdAndUpdate(
            _id, 
            { $set: { color } },
            { new: true } // This option returns the updated document
        );

        if (updatedColor) {
            return res.json({ success: true, message: "color updated successfully", updatedColor });
        } else {
            return res.status(404).json({ success: false, message: "Color not found" });
        }
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};




// ----------------------------Setting Product Attributes View---------------------------

let viewSettingProductAttributsColor =  async (req, res) => {
    let id = req.params.id
    let data = await attributes.find({ _id: id })
    res.json(data)
}


module.exports={
    CreateattributesColor,
    deleteattributesColor,
    getAllattributesColor,
    updateattributesColor,
    viewSettingProductAttributsColor
}
