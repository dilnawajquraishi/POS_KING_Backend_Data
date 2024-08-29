let SettingTax=require('../models/SettingTax')


let settingTaxCreate= async (req, res) => {
    let _id=req.params._id;
    try {
        const { name, status, taxRate, code } = req.body;
        let findtax=await find()
        const maiDetails = await SettingTax.create({
            name:name,
            status:status,
            taxRate:taxRate,
            mailPassword:mailPassword,
            code:code,
        });
        res.status(201).json({ success: true, message: 'Setting Tax details created successfully', maiDetails });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// -----------------------Get Emai---------------
let GetSettinTax=async(req,res)=>{
    try {
        let getCompany=await  SettingTax.find()
        return res.status(200).json({success:true,message:"user all data"})
    } catch (error) {
    return res.status(500).json({success:false,error:error.message})
        
    }

}

module.exports={
    settingTaxCreate,
    GetSettinTax
}


