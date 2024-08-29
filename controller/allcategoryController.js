const categoryModel = require('../models/allcategory.js')

/////     save Category /////////
exports.saveCategory = async(req, res)=>{
const categoryData = new categoryModel({
    alltypecategory: req.body.alltypecategory,
    barcode: req.body.barcode,
    tax: req.body.tax,
    brand: req.body.brand,
    unit: req.body.unit,
})
categoryData.save()
.then((data)=>{
    res.send('save category')
})
.catch(err=>console.log(err))
    
}





//////    get Category   /////
exports.getCategory = async (req, res) => {
    let data = await categoryModel.find({})
    res.json(data)
}





exports.getProductByCategory = async (req, res) => {
    try {
        let alltypecategory = req.params.alltypecategory;
        let data = await categoryModel.find({ alltypecategory: alltypecategory });
        if (data.length > 0) {
            res.status(200).json(data);
        } else {
            res.status(404).json({ message: "No products found for this category" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
