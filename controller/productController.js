const productModel = require('../models/product.js')
const cartModel=require("../models/cartModel.js")


///////     Create Product       ///////
exports.saveProduct = async (req, res) => {
    const productData = new productModel({
        productName: req.body.productName,
        sku: req.body.sku,
        category: req.body.category,
        barcode: req.body.barcode,
        buyingprice: req.body.buyingprice,
        sellingprice: req.body.sellingprice,
        tax: req.body.tax,
        brand: req.body.brand,
        status: req.body.status,
        canpurchasable: req.body.canpurchasable,
        showstockout: req.body.showstockout,
        refundable: req.body.refundable,
        maximumpurchasequantity: req.body.maximumpurchasequantity,
        lowstockquantitywarning: req.body.lowstockquantitywarning,
        unit: req.body.unit,
        weight: req.body.weight,
        tags: req.body.tags,

        description: req.body.description,
        image: req.file.filename
     })
     productData.save()
     .then((data) => {
         res.send('save')
     })
     .catch(err => console.log(err))
}


//////  get all product //////////

// exports.getProduct = async (req, res) => {
//     let data = await productModel.find({})
//     res.json(data)
// }





///////    view product ///////////
exports.viewProduct =  async (req, res) => {
    let id = req.params.id
    let data = await productModel.find({ _id: id })
    res.json(data)
}


//////   updateproduct //////////
exports.updateProduct = async (req, res) => {
    let id = req.params.id
    let newData = req.body
    if (req.file) {
        newData.image = req.file.filename;  
    }
    await productModel.findByIdAndUpdate(id, newData, { new: true })
    res.status(201).json({ message: "item Data Updated" });
}


//////    delete product /////////
exports.deleteProduct =  async (req, res) => {
    let id = req.params.id
    await productModel.findByIdAndDelete({ _id: id })
    res.send("Product deleted")
}


exports.getProductByfilter = async (req, res) => {
    const {productName, sku, buyingprice, sellingprice, category, brand, barcode, tax, unit, status, canpurchasable, showstockout, refundable} = req.query
    const queryItem = {}
    if(productName){
        queryItem.productName = productName
    }
    if(sku){
        queryItem.sku = sku
    }
    if(buyingprice){
        queryItem.buyingprice = buyingprice
    }
    if(sellingprice){
        queryItem.sellingprice = sellingprice
    }
    if(category){
        queryItem.category = category
    }
    if(brand){
        queryItem.brand = brand
    }
    if(barcode){
        queryItem.barcode = barcode
    }
    if(tax){
        queryItem.tax = tax
    }
    if(unit){
        queryItem.unit = unit
    }
    if(status){
        queryItem.status = status
    }
    if(canpurchasable){
        queryItem.canpurchasable = canpurchasable
    }
    if(showstockout){
        queryItem.showstockout = showstockout
    }
    if(refundable){
        queryItem.refundable = refundable
    }
    console.log(queryItem)
    const data = await productModel.find(queryItem)
    res.json(data)
}


exports.getProductByName= async (req, res) => {
    let productName = req.params.productName
    let data = await productModel.find({ productName: productName })
    res.json(data)
}



exports.searchProduct = async (req, res)=>{
    try {
        let search = req.body.search
        let product_Data = await productModel.find({"productName": {$regex: ".*" + search + ".*"}})
        if(product_Data.length > 0){
            res.status(200).send({sucess: true, msg:"Product Details", data:product_Data})
        }else{
            res.status(200).send({sucess: true, msg: "Product not found"})
        }
    } catch (error) {
        res.status(400).send({ sucess: false, msg:error.message})
    }
}



// API to get total number of users
exports.getTotalUsers = async (req, res) => {
    try {
        const totalUsers = await productModel.countDocuments();
        res.status(200).json({ totalUsers });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



// -----------------------------------------Update Cart Item-------------------------

exports.updateCartItemQuantity = async (req, res) => {
    try {
        const { cartItemId, operation } = req.body;
        const cartItem = await cartModel.findById(cartItemId);

        if (!cartItem) {
            return res.status(404).send('Cart item not found');
        }

        if (operation === 'increment') {
            cartItem.quantity += 1;
        } else if (operation === 'decrement' && cartItem.quantity > 1) {
            cartItem.quantity -= 1;
        } else {
            return res.status(400).send('Invalid operation');
        }

        const product = await productModel.findById(cartItem.productId);
        cartItem.totalPrice = product.sellingprice * cartItem.quantity;

        await cartItem.save();
        res.status(200).send('Cart item updated');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error updating cart item');
    }
};


// --------------------------------------------------------------Get Cart Summary----------------------------------

exports.getCartSummary = async (req, res) => {
    try {
        const cartItems = await cartModel.find().populate('productId');

        const totalAmount = cartItems.reduce((total, item) => {
            return total + item.totalPrice;
        }, 0);

        const cartSummary = cartItems.map(item => ({
            productName: item.productId.productName,
            quantity: item.quantity,
            pricePerUnit: item.productId.sellingprice,
            totalPrice: item.totalPrice,
            remainingStock: item.productId.lowstockquantitywarning - item.quantity
        }));

        res.status(200).json({ cartSummary, totalAmount });
    } catch (err) {
        console.log(err);
        res.status(500).send('Error fetching cart summary');
    }
};











// -----------------------------------------------Add To Cart-------------------------------------

exports.addToCart = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const product = await productModel.findById(productId);

        if (!product) {
            return res.status(404).send('Product not found');
        }

        const totalPrice = product.sellingprice * quantity;

        const cartItem = new cartModel({
            productId,
            quantity,
            totalPrice
        });

        await cartItem.save();
        res.status(200).send('Product added to cart');
    } catch (err) {
        console.log(err);
        res.status(500).send('Error adding product to cart');
    }
};

