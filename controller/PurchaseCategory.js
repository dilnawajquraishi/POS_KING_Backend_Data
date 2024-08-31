let PurchageCategory = require('../models/PurchageCategory');

// Create PurchageCategory
let createPurchageCategory = async (req, res) => {
    try {
        let newCategory = await PurchageCategory.create({
            tax: req.body.tax,
            quantity: req.body.quantity,
            discunt: req.body.discount,
            unitcost: req.body.unitcost
        });
        return res.status(200).json({ success: true, message: "Category created successfully", newCategory });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
}

// Get a PurchageCategory by ID
let getPurchageCategory = async (req, res) => {
    try {
        let category = await PurchageCategory.findById(req.params.id);
        if (!category) return res.status(404).json({ success: false, message: "Category not found" });
        return res.status(200).json({ success: true, category });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
}

// Update a PurchageCategory by ID
let updatePurchageCategory = async (req, res) => {
    try {
        let updatedCategory = await PurchageCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCategory) return res.status(404).json({ success: false, message: "Category not found" });
        return res.status(200).json({ success: true, message: "Category updated successfully", updatedCategory });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
}

// Delete a PurchageCategory by ID
let deletePurchageCategory = async (req, res) => {
    try {
        let deletedCategory = await PurchageCategory.findByIdAndDelete(req.params.id);
        if (!deletedCategory) return res.status(404).json({ success: false, message: "Category not found" });
        return res.status(200).json({ success: true, message: "Category deleted successfully" });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
}

module.exports = { createPurchageCategory, getPurchageCategory, updatePurchageCategory, deletePurchageCategory };
