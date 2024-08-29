let SettingUnit=require("../models/SettingUnit")
let newUnit=async(req,res)=>{
    let {name,code,status}=req.body;

    try {
        let supplier=await SettingUnit.create({
           name:name,
           code:code,
           status:status


        })
        return res.status(200).json({success:true,message:"unit created successfully",newUnit})
    } catch (error) {
        return res.status(400).json({success:false,error:error.message})
        
    }
}



// -----------------------------------------------------------------Delete_Supplier-----------------------------------

let deleteUnit = async (req, res) => {
    try {
        let result = await SettingUnit.findByIdAndDelete(req.params._id);
        if (!result) {
            return res.status(404).json({ success: false, message: "Unit deleted successfully" });
        }
        return res.status(200).json({ success: true, message: "Unit deleted successfully" });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};


// -----------------------------------------------------------------Get_ALL_Supplier-----------------------------------


let getAllUnit=async(req,res)=>{
    try {
        let findgetdata=await  SettingUnit.find({})
        return res.status(200).json({success:true,message:"get all data",findgetdata})
    } catch (error) {
        return res.status(500).json({success:false,error:error.message})
        
    }
}


// -----------------------------------------------------------------UpdateSupplier-----------------------------------


let updateUnit = async (req, res) => {
    let { date,refrenceno,status,image,supplier } = req.body;
    let _id = req.params._id;
    try {
        let updatedamage = await SettingUnit.findByIdAndUpdate(
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

let viewUnit =  async (req, res) => {
    let id = req.params.id
    let data = await SettingUnit.find({ _id: id })
    res.json(data)
}


module.exports={
    newUnit,
    deleteUnit,
    getAllUnit,
    updateUnit,
    viewUnit
}
