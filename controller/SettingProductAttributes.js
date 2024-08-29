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


// -----------------------------------------------------------------UpdateSupplier-----------------------------------


let updateattributes= async (req, res) => {
    let {name} = req.body;
    let _id = req.params._id;
    try {
        let updatedamage = await settingProductCategory.findByIdAndUpdate(
            _id,
            { $set: { name} },
            { new: true }
        );

        return res.status(200).json({ success: true, message: "category  updated successfully", updatedamage });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};



module.exports={
    Createattributes,
    deleteattributes,
    getAllattributes,
    updateattributes,
}
