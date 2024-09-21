let settingCity=require('../models/SettingCity')

let createCity=async(req,res)=>{
    let {cityName,stateName,status,userId}=req.body;
    try {
        let AddCity=await settingCity.create({
            cityName:cityName,
            stateName:stateName,
            status:status,
            userId:userId
        })
        return res.status(200).json({success:true,message:"Created city Successfully"})
    } catch (error) {
        return res.status(400).json({success:trfalseue,error:error.message})
        
    }
}


// ------------------------------------Update----------------------------------
let updateCity= async (req, res) => {
    let _id = req.params._id;
    let {cityName,stateName,status,userId}=req.body;

    try {
        let findCity = await settingCity.findById(_id);
        if (findCity) {
            findCity.cityName = cityName;
            findCity.stateName = stateName;
            findCity.status = status;
            findCity.userId = userId;


            await findCity.save();

            return res.json({ success: true, message: "city updated successfully", findState });
        } else {
            return res.status(404).json({ success: false, message: "city not found" });
        }
    } catch (error) {city
        return res.status(400).json({ success: false, error: error.message });
    }
};

// ------------------------------------DeleteCountry------------------------

let deleteCity=async(req,res)=>{
    let _id=req.params._id;
    try {
        let deleteCountryById=await settingCity.findByIdAndDelete({_id:_id})
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


let GetAllCity=async(req,res)=>{
    
    try {
        let findall=await settingCity.find()
        return res.status(200).json({success:true,message:"get all address",findall})
    } catch (error) {
        return res.status(400).json({success:false,error:error.message})
        
    }
}


// --------------------Filter--------------------


let filterCity = async (req, res) => {
    let { cityName, stateName, status } = req.query;  // Extract filter parameters from the query string

    // Build the filter object dynamically
    let filter = {};

    if (cityName) {
        filter.cityName = { $regex: cityName, $options: 'i' }; // Case-insensitive match for city name
    }

    if (stateName) {
        filter.stateName = { $regex: stateName, $options: 'i' }; // Case-insensitive match for state name
    }

    if (status) {
        filter.status = status; // Exact match for status
    }

    try {
        let filteredCities = await settingCity.find(filter);  // Find cities based on the filter
        return res.status(200).json({ success: true, message: "Filtered cities retrieved successfully", data: filteredCities });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};



module.exports={
    createCity,
    deleteCity,
    GetAllCity,
    filterCity,
    updateCity

}