let SettingBrand=require('../models/SettingBrand')


let settingBrandCreate= async (req, res) => {
    let _id=req.params._id;
    try {
        const { name, status,description} = req.body;
        let findtax=await find()
        const maiDetails = await SettingBrand.create({
            name:name,
            status:status,
            description:description,
        });
        res.status(201).json({ success: true, message: 'Setting brand details created successfully', maiDetails });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// -----------------------Get Emai---------------
let GetSettingBrand=async(req,res)=>{
    try {
        let getCompany=await  SettingBrand.find()
        return res.status(200).json({success:true,message:"brand all data"})
    } catch (error) {
    return res.status(500).json({success:false,error:error.message})
        
    }

}

module.exports={
    settingBrandCreate,
    GetSettingBrand
}


