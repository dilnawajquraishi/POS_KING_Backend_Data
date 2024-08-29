let settingEmailModel=require('../models/SettingMail')


let settingEmail= async (req, res) => {
    try {
        const { mailPort, mailHost, mailUsername, mailPassword ,mailFromName,mailEncryption} = req.body;
        const maiDetails = await settingEmailModel.create({
            mailPort:mailPort,
            mailHost:mailHost,
            mailUsername:mailUsername,
            mailPassword:mailPassword,
            mailFromName:mailFromName,
            mailEncryption:mailEncryption
        });
        res.status(201).json({ success: true, message: 'mail details created successfully', maiDetails });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

// -----------------------Get Emai---------------
let GetEmail=async(req,res)=>{
    try {
        let getCompany=await  settingEmailModel.find()
        return res.status(200).json({success:true,message:"user all data"})
    } catch (error) {
    return res.status(500).json({success:false,error:error.message})
        
    }

}

module.exports={
    settingEmail,
    GetEmail
}


// Mail Host*
// Mail Port*
// Mail Username*
// Mail Password*
// Mail From Name*
// Mail From Email*
// Mail Encryption*