let express=require("express")
let AdministratorCategory=require('../models/AdministratorCategory')

// --------------------AddAddress-----------------


let createdaddress=async(req,res)=>{
    let {country}=req.body;
    try {

        // let _id=req.params._id;
     
        // let findemploy=await AddressCategory.findOne({_id:_id})
if(findemploy){
 
}
        let addaddress=await AdministratorCategory.create({
     
          country:country  
        })
        return res.status(200).json({success:true,message:"add address successfully",addaddress})
    } catch (error) {
        return res.status(200).json({success:false,error:error.message})
        
    }
}



// --------------------FindAllAddress------------------
let FindAllAddress=async(req,res)=>{
    try {
        let findall=await AdministratorCategory.find()
        return res.status(200).json({success:true,message:"get all address",findall})
    } catch (error) {
        return res.status(400).json({success:false,error:error.message})
        
    }
}





module.exports={
    createdaddress,
    FindAllAddress
}