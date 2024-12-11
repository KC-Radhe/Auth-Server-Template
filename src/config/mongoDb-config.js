const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/authServer');
        console.log('MongoDB connected')
    } catch (error) {
        console.log('Error on connecting mongoose: ', error);
        process.exit(1);
    }
}
module.exports = connectDB;