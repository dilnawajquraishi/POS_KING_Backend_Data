let SettingState=require('../models/SettingState')

let createState=async(req,res)=>{
    let {stateName,countryName,status}=req.body;
    try {
        let AddCountry=await SettingState.create({
            stateName:stateName,
            countryName:countryName,
            status:status
        })
        return res.status(200).json({success:true,message:"Created Country Successfully"})
    } catch (error) {
        return res.status(400).json({success:trfalseue,error:error.message})
        
    }
}

// ------------------------------------DeleteCountry------------------------

let deleteState=async(req,res)=>{
    let _id=req.params._id;
    try {
        let deleteCountryById=await SettingState.findByIdAndDelete({_id:_id})
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




let GetAllState=async(req,res)=>{
    
    try {
        let findall=await SettingState.find()
        return res.status(200).json({success:true,message:"get all address",findall})
    } catch (error) {
        return res.status(400).json({success:false,error:error.message})
        
    }
}


module.exports={
    createState,
    deleteState,
    GetAllState
}