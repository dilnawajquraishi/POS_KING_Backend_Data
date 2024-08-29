
let SalesReport=require("../models/SalesReport")
let  getSalesReport= async (req, res) => {
    let data = await SalesReport.find()
    res.json(data)
}
module.exports=getSalesReport