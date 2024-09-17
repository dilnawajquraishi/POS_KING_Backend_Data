const Purchage = require('../models/Orderdetails');
let saledetails= async (req, res) => {
    const { filter, startDate, endDate } = req.query;

    try {
        // Build the query object
        const query = {
            created_at: { $gte: new Date(startDate), $lte: new Date(endDate) }
        };

        let aggregationPipeline = [
            { $match: query }
        ];

        if (filter === 'day') {
            aggregationPipeline.push(
                {
                    $group: {
                        _id: { day: { $dayOfMonth: "$created_at" }, month: { $month: "$created_at" }, year: { $year: "$created_at" } },
                        total: { $sum: 1 }
                    }
                }
            );
        } else if (filter === 'week') {
            aggregationPipeline.push(
                {
                    $group: {
                        _id: { week: { $week: "$created_at" }, year: { $year: "$created_at" } },
                        total: { $sum: 1 }
                    }
                }
            );
        } else if (filter === 'month') {
            aggregationPipeline.push(
                {
                    $group: {
                        _id: { month: { $month: "$created_at" }, year: { $year: "$created_at" } },
                        total: { $sum: 1 }
                    }
                }
            );
        } else if (filter === 'year') {
            aggregationPipeline.push(
                {
                    $group: {
                        _id: { year: { $year: "$created_at" } },
                        total: { $sum: 1 }
                    }
                }
            );
        }

        const purchases = await Purchage.aggregate(aggregationPipeline);

        res.status(200).json({ success: true, data: purchases });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};


// -------------------------------------------Daily Average Sale And Total Sale----------------------------



//  for getting total sales and average daily sales
let dailysale= async (req, res) => {
    const { startDate, endDate } = req.query;

    try {
        // Build the query object
        const query = {
            created_at: { $gte: new Date(startDate), $lte: new Date(endDate) }
        };

        // Aggregation pipeline to calculate total sales and number of days
        const aggregationPipeline = [
            { $match: query },
            { $group: { _id: null, totalSales: { $sum: "$amount" }, count: { $sum: 1 } } }
        ];

        const result = await saledetails.aggregate(aggregationPipeline);

        // Calculate the number of days in the date range
        const start = new Date(startDate);
        const end = new Date(endDate);
        const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

        // Calculate average sales per day
        const totalSales = result.length > 0 ? result[0].totalSales : 0;
        const averageSalesPerDay = days > 0 ? (totalSales / days) : 0;

        res.status(200).json({
            success: true,
            totalSales,
            averageSalesPerDay
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};


module.exports ={
    saledetails,
    dailysale
}
