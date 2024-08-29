
const OrderDetails = require('../models/Orderdetails');
const Purchage = require('../models/Purchage');

// Create Order Details
router.post('/create-order', async (req, res) => {
    try {
        const { created_at, refrenceno, purchage, PurchageCategory } = req.body;
        const newOrderDetails = await OrderDetails.create({
            created_at,
            refrenceno,
            purchage, // Reference to purchage
            PurchageCategory
        });
        res.status(201).json({ success: true, message: 'Order details created successfully', newOrderDetails });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

// Get Orders with Payment Status
let orderState= async (req, res) => {
    try {
        const { filter, startDate, endDate } = req.query;
        
        // Build the query object
        let matchQuery = {
            created_at: { $gte: new Date(startDate), $lte: new Date(endDate) }
        };

        if (filter === 'day') {
            matchQuery['created_at'] = { $gte: new Date(startDate), $lte: new Date(endDate) };
        } else if (filter === 'week') {
            matchQuery['created_at'] = { $gte: new Date(startDate), $lte: new Date(endDate) };
        } else if (filter === 'month') {
            matchQuery['created_at'] = { $gte: new Date(startDate), $lte: new Date(endDate) };
        }

        const reportData = await Purchage.aggregate([
            { $match: matchQuery },
            { $group: { _id: '$paymentstatus', count: { $sum: 1 } } }
        ]);

        res.status(200).json({ success: true, data: reportData });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = orderState;
