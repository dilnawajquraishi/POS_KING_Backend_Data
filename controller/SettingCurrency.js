let currencyModel=require("../models/SettingCurrency")

let createCurrency=async(req,res)=>{
    let {name,symbol,code,isCryptocurrency,exchangeRate}=req.body;

try {
let NewCurrency=await currencyModel.create({
    name:name,
    symbol:symbol,
    code:code,
    isCryptocurrency:isCryptocurrency,
    exchangeRate:exchangeRate
})
return res.status(200).json({success:true,message:"created currency success",NewCurrency})
} catch (error) {
return res.status(400).json({success:false,error:error.message})
    
}
}


let GetAllCurrency=async(req,res)=>{
    
    try {
        let findall=await currencyModel.find()
        return res.status(200).json({success:true,message:"get all currency",findall})
    } catch (error) {
        return res.status(400).json({success:false,error:error.message})
        
    }
}

module.exports={
    createCurrency, 
    GetAllCurrency
}