let SettingLanguage=require("../models/SettingLanguage")
let createLanguage=async(req,res)=>{
 try {
    let {name,code,displaymode,image,status}=req.body
    let newlogo=await SettingLanguage.create({
        name:name,
        code:code,
        image:req.file.filename,
        status:status,
        displaymode:displaymode

    })
    return res.status(200).json({success:true,message:"Add Language successfully",newlogo})
 } catch (error) {
    return res.status(400).json({success:false,error:error.message})
    
 }
}

let getLanguage=async(req,res)=>{
    try {
        let find=await SettingLanguage.find({})
        return res.status(200).json({success:true,message:"Get All Language"})
    } catch (error) {
        return res.status(400).json({success:false,error:error.message})
        
    }
}


module.exports={
    createLanguage,
    getLanguage

}