let AddressAdministrator=require('../models/AdminstratorAddress')
// --------------------AddAddress-----------------
let AdministratorAddressDetails=async(req,res)=>{
    let {name,email,phoneNumber,city,country,state,zipCode,street}=req.body;
    try {
        let _id=req.params._id;
    
        let findemploy=await AddressAdministrator.findOne({_id:_id})
if(findemploy){
 
}
let addaddress=await AddressAdministrator.create({
    name:name,
    email:email,
  city:city,
  phoneNumber:phoneNumber,
  zipCode:zipCode,
  street:street,
  state:state,
  country:country  
})        
       

     
        return res.status(200).json({success:true,message:"add address successfully",addaddress})
    } catch (error) {
        return res.status(200).json({success:false,error:error.message})
        
    }
}



// --------------------FindAllAddress------------------


let AdminstratorAllAddress=async(req,res)=>{
    try {
        let findall=await AddressAdministrator.find()
        return res.status(200).json({success:true,message:"get all address",findall})
    } catch (error) {
        return res.status(400).json({success:false,error:error.message})
        
    }
}




let deleteAdministratorAddress=async(req,res)=>{
    let _id=req.params._id;
    try {
        let findEmployees=await AddressAdministrator.findByIdAndDelete({_id:_id})
        if(findEmployees){
            return res.status(200).json({success:true,message:"Employees deleted successfully",findEmployees})
        }
    } catch (error) {
        return res.status(400).json({success:"false",error:error.message})
    }
}


// ------------------Update-Administrator--------------------------

state

exports.updateAdministratorAddress=async(req,res)=>{
    let _id=req.params._id;

let {name,city,street,country,phoneNumber,zipCode  }=req.body;
    try {
        let findCustomer=await AddressAdministrator.findByIdAndUpdate({_id:_id})
        if(findCustomer){
let updateCustomer= await administratorModel.updateOne({_id:_id}, { $set:{name: name,zipCode:zipCode,city:city,street:street,country:country,phoneNumber:phoneNumber}})

            return res.send.json({success:true,message:"Employees updated successfully",updateCustomer})
        }
    } catch (error) {
        return res.status(400).json({success:"false",error:error.message})
    }
}



// ------------------------------------------------Administrators-View-------------------------------

let viewAdministratorAddress =  async (req, res) => {
    let id = req.params.id
    let data = await AddressAdministrator.find({ _id: id })
    res.json(data)
}

module.exports={
    AdministratorAddressDetails,
    AdminstratorAllAddress,
    deleteAdministratorAddress,
    viewAdministratorAddress,
    updateAdministratorAddress
}