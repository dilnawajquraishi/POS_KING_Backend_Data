const productModel = require('../models/product.js');

// API to get product details with sold and remaining quantity
exports.getProductInventory = async (req, res) => {
    try {
        const products = await productModel.find().select('productName category soldQuantity initialStock').populate('category', 'alltypecategory');
        
        const productDetails = products.map(product => ({
            productName: product.productName,
            categoryName: product.category ? product.category.alltypecategory : 'Uncategorized',
            soldQuantity: product.soldQuantity,
            remainingQuantity: product.remainingQuantity,
        }));

        res.status(200).json(productDetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
