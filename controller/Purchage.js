let express = require('express');
let purchagemodel = require('../models/Purchage');
const PurchageCategory = require('../models/PurchaseCategory');
const { FindAllAddress } = require('./EmployeeAddressCategory');

let purchage = async (req, res) => {
    console.log('_______________________________________________ invoked')
    let { created_at, name, image, supplier, paymentstatus, textarea, refrenceno,  PurchageCategory } = req.body;
    console.log(supplier);
    try {
        let newpurchage = await purchagemodel.create({
            created_at: created_at,
            name: name,
            image:req.file.filename,
            supplier: supplier,
            paymentstatus: paymentstatus,
            textarea:textarea,
            refrenceno: refrenceno,
            PurchageCategory:  PurchageCategory
            // search:seach
        });
        return res.status(200).json({ success: true, message: "Purchase created successfully", newpurchage });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
}


let delete_purchage_product = async (req, res) => {
    try {
        let result = await purchagemodel.findByIdAndDelete(req.params._id);
        if (!result) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        return res.status(200).json({ success: true, message: "purchase product deleted successfully" });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};




let getAllPurchages=async(req,res)=>{
    try {
        let findgetdata=await  purchagemodel.find({})
        return res.status(200).json({success:true,message:"get all data",findgetdata})
    } catch (error) {
        return res.status(500).json({success:false,error:error.message})
        
    }
}



let purchage_update = async (req, res) => {
    let { date,refrenceno,status,image,supplier } = req.body;
    let _id = req.params._id;
    try {
        let updatedamage = await purchagemodel.findByIdAndUpdate(
            _id,
            { $set: { date, refrenceno, status, image,supplier,paymentstatus } },
            { new: true }
        );

        return res.status(200).json({ success: true, message: "purhcage product updated successfully", updatedamage });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};

module.exports = {
     purchage,
     delete_purchage_product ,
     getAllPurchages,
     purchage_update
     };
