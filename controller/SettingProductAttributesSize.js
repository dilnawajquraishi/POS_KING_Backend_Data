let sizemodel=require("../models/SettingProductAttributesSize")
let CreateattributesSize=async(req,res)=>{
    let {size}=req.body;

    try {
        let  newsize=await sizemodel.create({
        size:size,
           


        })
        return res.status(200).json({success:true,message:"newsize created successfully",newsize})
    } catch (error) {
        return res.status(400).json({success:false,error:error.message})
        
    }
}



// -----------------------------------------------------------------DeleteSize-----------------------------------

let deleteattributesSize = async (req, res) => {
    try {
        let result = await sizemodel.findByIdAndDelete(req.params._id);
        if (!result) {
            return res.status(404).json({ success: false, message: "size deleted successfully" });
        }
        return res.status(200).json({ success: true, message: "size deleted successfully" });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};


// -----------------------------------------------------------------Get_ALL_size-----------------------------------


let getAllattributesSize=async(req,res)=>{
    try {
        let findgetdata=await  sizemodel.find({})
        return res.status(200).json({success:true,message:"get all data",findgetdata})
    } catch (error) {
        return res.status(500).json({success:false,error:error.message})
        
    }
}


// -----------------------------------------------------------------UpdateSize----------------------------------

let updateattributesSize = async (req, res) => {
    let _id = req.params._id;
    let { size} = req.body;

    try {
        // Update the address and return the updated document
        let updatedsize = await sizemodel.findByIdAndUpdate(
            _id, 
            { $set: {size } },
            { new: true } // This option returns the updated document
        );

        if (updatedsize) {
            return res.json({ success: true, message: "size updated successfully", updatedsize });
        } else {
            return res.status(404).json({ success: false, message: "size not found" });
        }
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};




// ----------------------------Setting Product Attributessize View---------------------------

// let viewSettingProductAttributsSize =  async (req, res) => {
//     let id = req.params._id
//     let data = await sizemodel.find({ _id: id})
//     res.json(data)
// }



let viewSettingProductAttributsSize = async (req, res) => {
    try {
        let id = req.params._id;  // Use _id as defined in the route
        let data = await sizemodel.findById(id);  // Use findById for single document

        if (!data) {
            return res.status(404).json({ success: false, message: "Size not found" });
        }

        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};




module.exports={
    CreateattributesSize,
    deleteattributesSize,
    getAllattributesSize,
    updateattributesSize,   
    viewSettingProductAttributsSize
}