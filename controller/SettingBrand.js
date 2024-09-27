let SettingBrand=require('../models/SettingBrand')


let settingBrandCreate= async (req, res) => {
    // let _id=req.params._id;
    try {
        const { name, status,description,image} = req.body;
        // let findtax=await find()
        const newbrand = await SettingBrand.create({
            name:name,
            status:status,
            image:req.file.filename,
            description:description,
        });
        res.status(201).json({ success: true, message: 'Setting brand details created successfully',newbrand });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// -----------------------Get Brand---------------
let GetSettingBrand=async(req,res)=>{
    try {
        let getCompany=await  SettingBrand.find()
        return res.status(200).json({success:true,message:"brand all data"})
    } catch (error) {
    return res.status(500).json({success:false,error:error.message})
        
    }

}

// // ---------------------------------------Setting Brand Update----------------------------

// let settingUpdateBrand = async (req, res) => {
//     let _id = req.params._id;
//     let {name,status,description,image} = req.body;

//     try {
//         // Update the address and return the updated document
//         let updatedBrand = await SettingBrand.findByIdAndUpdate(
//             _id, 
//             { $set: {name,image,description,status} },
//             { new: true } // This option returns the updated document
//         );

//         if (updatedBrand) {
//             return res.json({ success: true, message: "Brand updated successfully", updatedBrand });
//         } else {
//             return res.status(404).json({ success: false, message: "Brand not found" });
//         }
//     } catch (error) {
//         return res.status(400).json({ success: false, error: error.message });
//     }
// };











// ---------------------------------for update with image-----------------
let settingUpdateBrand = async (req, res) => {
    let _id = req.params._id;
    let { name, status, description } = req.body;

    try {
        // Find the existing brand
        let existingBrand = await SettingBrand.findById(_id);

        if (!existingBrand) {
            return res.status(404).json({ success: false, message: "Brand not found" });
        }

        // If there's a new image, update the image field
        let image = existingBrand.image;
        if (req.file) {
            image = req.file.filename;
        }

        // Update the brand with new details
        let updatedBrand = await SettingBrand.findByIdAndUpdate(
            _id,
            { $set: { name, status, description, image } },
            { new: true } // This option returns the updated document
        );

        return res.json({ success: true, message: "Brand updated successfully", updatedBrand });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};


// -------------------------------------------------------DeleteSettingBrand-------------------
let SettingDeleteBrand=async(req,res)=>{
    let id=req.params._id;
    try {
        let findBrand=await SettingBrand.findByIdAndDelete({_id:id})
        return res.status(200).json({success:true,message:"Brand deleted successfully",findBrand})
    } catch (error) {
        return res.status(500).json({success:false,error:error.message})
        
    }
}

// ---------------------------------------View--------------------------\
let viewSettingBrand =  async (req, res) => {
    let id = req.params.id
    let data = await SettingBrand.find({ _id: id })
    res.json(data)
}

module.exports={
    settingBrandCreate,
    GetSettingBrand,
    viewSettingBrand,
    SettingDeleteBrand,
    settingUpdateBrand
}


