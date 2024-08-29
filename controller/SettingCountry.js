let settingCountry=require('../models/SettingCountry')

let createCountry=async(req,res)=>{
    let {countryName,code,status,userId}=req.body;
    try {
        let AddCountry=await settingCountry.create({
            countryName:countryName,
            code:code,
            status:status,
            userId:userId
        })
        return res.status(200).json({success:true,message:"Created Country Successfully"})
    } catch (error) {
        return res.status(400).json({success:trfalseue,error:error.message})
        
    }
}

// ------------------------------------DeleteCountry------------------------

let deleteCountry=async(req,res)=>{
    let _id=req.params._id;
    try {
        let deleteCountryById=await settingCountry.findByIdAndDelete({_id:_id})
     if(deleteCountryById)

    {
        return res.status(200).json({success:true,message:"Employees deleted successfully",findEmployees})

    }else{

        return res.status(500).json({success:false,message:"User not found"})
    }

    } catch (error) {
        return res.status(200).json({success:true,error:error.message})
        
    }
}




let GetAllCountry=async(req,res)=>{
    
    try {
        let findall=await settingCountry.find()
        return res.status(200).json({success:true,message:"get all address",findall})
    } catch (error) {
        return res.status(400).json({success:false,error:error.message})
        
    }
}


module.exports={
    createCountry,
    deleteCountry,
    GetAllCountry
}