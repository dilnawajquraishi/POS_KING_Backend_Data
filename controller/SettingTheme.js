let ThemeModel=require("../models/settingTheme")
let createtheme=async(req,res)=>{
 try {
    let {logo,footerlogo,favicon}=req.body
    let newlogo=await ThemeModel.create({
        logo:req.file.filename,
        footerlogo:req.file.filename,
        favicon:req.file.filename,

    })
    return res.status(200).json({success:true,message:"logo add successfully",newlogo})
 } catch (error) {
    return res.status(400).json({success:false,error:error.message})
    
 }
}
module.exports=createtheme