let settingProductCategory=require("../models/SettingProductCategory")
let CreateCategory=async(req,res)=>{
    let {name,image,status,description}=req.body;

    try {
        let category=await settingProductCategory.create({
            parentCategory:parentCategory,
            name:name,
            status:status,
            image:req.file.filename,
            description:description

        })
        return res.status(200).json({success:true,message:"category created successfully",category})
    } catch (error) {
        return res.status(400).json({success:false,error:error.message})
        
    }
}

// -----------------------------------------------------------------Delete_Supplier-----------------------------------

let deleteCategory = async (req, res) => {
    try {
        let result = await settingProductCategory.findByIdAndDelete(req.params._id);
        if (!result) {
            return res.status(404).json({ success: false, message: "category not  deleted successfully" });
        }
        return res.status(200).json({ success: true, message: "category deleted successfully" });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};


// -----------------------------------------------------------------Get_ALL_Supplier-----------------------------------


let getAllCategoy=async(req,res)=>{
    try {
        let findgetdata=await  settingProductCategory.find({})
        return res.status(200).json({success:true,message:"get all data",findgetdata})
    } catch (error) {
        return res.status(500).json({success:false,error:error.message})
        
    }
}


// -----------------------------------------------------------------UpdateSupplier-----------------------------------


let updateCategory= async (req, res) => {
    let { date,refrenceno,status,image,supplier } = req.body;
    let _id = req.params._id;
    try {
        let updatedamage = await settingProductCategory.findByIdAndUpdate(
            _id,
            { $set: { date, refrenceno, status, image,supplier,paymentstatus } },
            { new: true }
        );

        return res.status(200).json({ success: true, message: "category  updated successfully", updatedamage });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};



module.exports={
    CreateCategory,
    deleteCategory,
    getAllCategoy,
    updateCategory,
}

