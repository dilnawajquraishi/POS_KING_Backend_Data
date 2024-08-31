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


let updateAdministratorAddress = async (req, res) => {
    let _id = req.params._id;
    let { name, city, street, country, phoneNumber, zipCode, state } = req.body;

    try {
        // Update the address and return the updated document
        let updatedCustomer = await administratorModel.findByIdAndUpdate(
            _id, 
            { $set: { name, city, street, country, phoneNumber, zipCode, state } },
            { new: true } // This option returns the updated document
        );

        if (updatedCustomer) {
            return res.json({ success: true, message: "Employees updated successfully", updatedCustomer });
        } else {
            return res.status(404).json({ success: false, message: "Customer not found" });
        }
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};



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