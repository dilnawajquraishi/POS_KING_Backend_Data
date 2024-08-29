let addressemployee = require('../models/addAddress.js')


// --------------------AddAddress-----------------
exports.createdaddressDetails=async(req,res)=>{
    let {name,email,phoneNumber,city,country,state,zipCode,streetAddress}=req.body;
    try {
        let _id=req.params._id;
    
        let findemploy = await addressemployee.findOne({_id:_id})
if(findemploy){
 
}
let addaddress=await addressemployee.create({
    name:name,
    email:email,
  city:city,
  phoneNumber:phoneNumber,
  zipCode:zipCode,
  streetAddress:streetAddress,
  state:state,
  country:country  
})        
       
        // }
     
        return res.status(200).json({success:true,message:"add address successfully",addaddress})
    } catch (error) {
        return res.status(200).json({success:false,error:error.message})
        
    }
}


// -------------------------UpdateAddress-----------------------------
exports.updateAdministrator = async (req, res) => {
    let _id = req.params._id;
    let {name,email,phoneNumber,city,country,state,zipCode,streetAddress}=req.body;


    try {
        let findCustomer = await addressemployee.findById(_id);
        if (findCustomer) {
            findCustomer.name = name;
            findCustomer.email = email;
            findCustomer.phoneNumber = phoneNumber;
            findCustomer.city = city;
            findCustomer.country = country;
            findCustomer.state = state;
            findCustomer.zipCode = zipCode;
            findCustomer.streetAddress = streetAddress;


            await findCustomer.save();

            return res.json({ success: true, message: "Administrator updated successfully", findCustomer });
        } else {
            return res.status(404).json({ success: false, message: "Administrator not found" });
        }
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};
// -------------------------DeleteAddress-----------------------------
exports.deleteAddress=async(req,res)=>{
    let _id=req.params._id;
try {
    let deleteAddress=await addressemployee.findByIdAndDelete({_id:_id})
    if(deleteAddress){
        return res.status(200).json({success:true,message:"Address deleted successfully"})
    }
} catch (error) {
    return res.status(400).json({success:false,error:error.message})
    
}
}

// --------------------FindAllAddress------------------
exports.employAllAddress=async(req,res)=>{
    
    try {
        let findall=await addressemployee.find()
        return res.status(200).json({success:true,message:"get all address",findall})
    } catch (error) {
        return res.status(400).json({success:false,error:error.message})
        
    }
}