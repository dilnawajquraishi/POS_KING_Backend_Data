let SiteModel=require("../models/SettingSupplier")
let newSite=async(req,res)=>{
    let {companyName,name,email,phone,state,city,country,address,zipCode,image}=req.body;

    try {
        let supplier=await SiteModel.create({
            companyName:companyName,
            name:name,
            email:email,
            phone:phone,
            state:state,
            city:city,
            country:country,
            address:address,
            zipCode:zipCode,
            image:req.file.filename


        })
        return res.status(200).json({success:true,message:"supplier created successfully",supplier})
    } catch (error) {
        return res.status(400).json({success:false,error:error.message})
        
    }
}



// -----------------------------------------------------------------Delete_Supplier-----------------------------------

let deleteSite = async (req, res) => {
    try {
        let result = await SiteModel.findByIdAndDelete(req.params._id);
        if (!result) {
            return res.status(404).json({ success: false, message: "supplier deleted successfully" });
        }
        return res.status(200).json({ success: true, message: "supplier deleted successfully" });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};


// -----------------------------------------------------------------Get_ALL_Supplier-----------------------------------


let getAllSite=async(req,res)=>{
    try {
        let findgetdata=await  SiteModel.find({})
        return res.status(200).json({success:true,message:"get all data",findgetdata})
    } catch (error) {
        return res.status(500).json({success:false,error:error.message})
        
    }
}


// -----------------------------------------------------------------UpdateSupplier-----------------------------------


let updateSite = async (req, res) => {
    let { date,refrenceno,status,image,supplier } = req.body;
    let _id = req.params._id;
    try {
        let updatedamage = await SiteModel.findByIdAndUpdate(
            _id,
            { $set: { date, refrenceno, status, image,supplier,paymentstatus } },
            { new: true }
        );

        return res.status(200).json({ success: true, message: "purhcage product updated successfully", updatedamage });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};


// ----------------------------------------View_Supplier--------------------------

let viewSite =  async (req, res) => {
    let id = req.params.id
    let data = await SiteModel.find({ _id: id })
    res.json(data)
}


module.exports={
    newSite,
    deleteSite,
    getAllSite,
    updateSite,
    viewSite
}
