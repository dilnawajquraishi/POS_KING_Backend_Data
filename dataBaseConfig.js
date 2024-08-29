let mongoose = require('mongoose')

const connection = async () => {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/POS_KING')
        .then(() => console.log('Connected!'));
        
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}
module.exports = connection