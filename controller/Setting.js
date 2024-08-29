let settingmodel=require('../models/Setting')

let settingRegister=async(req,res)=>{
    let {companyName,email,website,state,zipcode,longitude,phone,city,countrycode,userId}=req.body;
    try {
let find=await settingmodel.find({emai:email})
    if(!find){
    let  newCompany=await settingmodel.create({
        companyName:companyName,
        email:email,
        website:website,
        state:state,
        zipcode:zipcode,
        longitude:longitude,
        phone:phone,
        city:city,
        countrycode:countrycode,
        userId:userId

        })
        return res.state(200).json({success:true,message:"user created successfully"})

     
    }
  
    else{
        return res.state(500).json({success:false,message:"user already Register"})
    }

    } catch (error) {
        return res.status(500).json({success:false,error:error.message})
    }
}


// ------------------------Get User-------------------
let getUser=async(req,res)=>{
    try {
        let getCompany=await  settingmodel.find()
        return res.status(200).json({success:true,message:"user all data"})
    } catch (error) {
        
    }
    return res.status(500).json({success:false,error:error.message})

}
module.exports={
    settingRegister,
    getUser

}