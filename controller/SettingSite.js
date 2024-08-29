let SettingSite=require("../models/SettingSite")
let newSite=async(req,res)=>{
            let {dateFormat,timeFormat,defaultTimezone,defaultLanguage,copyright,androidAppLink,nonPurchaseProductMaxQty,digitsAfterDecimal,   defaultCurrency,currencyPosition,cashOnDelivery,isReturnProductPriceAddToCredit,onlinePaymentGateway,languageSwitch,emailVerification,phoneVerification,appDebug}=req.body;

    try {
        let supplier=await SettingSite.create({
            dateFormat:dateFormat,
            timeFormat:timeFormat,
            defaultTimezone:defaultTimezone,
            defaultLanguage:defaultLanguage,
            copyright:copyright,
            androidAppLink:androidAppLink,
            iosAppLink:iosAppLink,
            nonPurchaseProductMaxQty:nonPurchaseProductMaxQty,
            digitsAfterDecimal:digitsAfterDecimal,
            defaultCurrency:defaultCurrency,
            currencyPosition:currencyPosition,
            cashOnDelivery:cashOnDelivery,
            isReturnProductPriceAddToCredit:isReturnProductPriceAddToCredit,
            onlinePaymentGateway:onlinePaymentGateway,
            languageSwitch:languageSwitch,
            emailVerification:emailVerification,
            phoneVerification:phoneVerification,
            appDebug:appDebug


        })
        return res.status(200).json({success:true,message:"unit created successfully",newUnit})
    } catch (error) {
        return res.status(400).json({success:false,error:error.message})
        
    }
}



// -----------------------------------------------------------------Delete_Supplier-----------------------------------

let deleteSite = async (req, res) => {
    try {
        let result = await SettingSite.findByIdAndDelete(req.params._id);
        if (!result) {
            return res.status(404).json({ success: false, message: "Unit deleted successfully" });
        }
        return res.status(200).json({ success: true, message: "Unit deleted successfully" });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};


// -----------------------------------------------------------------Get_ALL_Supplier-----------------------------------


let getAllSite=async(req,res)=>{
    try {
        let findgetdata=await  SettingSite.find({})
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
        let updatedamage = await SettingSite.findByIdAndUpdate(
            _id,
            { $set: { dateFormat,timeFormat,defaultTimezone,defaultLanguage,copyright,androidAppLink,nonPurchaseProductMaxQty,digitsAfterDecimal,   defaultCurrency,currencyPosition,cashOnDelivery,isReturnProductPriceAddToCredit,onlinePaymentGateway,languageSwitch,emailVerification,phoneVerification,appDebug } },
            { new: true }
        );

        return res.status(200).json({ success: true, message: " Site updated successfully", updatedamage });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};


// ----------------------------------------View_Supplier--------------------------

let viewSite =  async (req, res) => {
    let id = req.params.id
    let data = await SettingSite.find({ _id: id })
    res.json(data)
}


module.exports={
    newSite,
    deleteSite,
    getAllSite,
    updateSite,
    viewSite
}
