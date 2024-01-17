const mongoose = require('mongoose');
require('dotenv').config();
const connectionString = process.env['LIVE_DATABASE_URI'];

//console.log(connectionString);
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(connectionString);
        console.log(`mongoDB Connected: ${conn.connection.host}`);
    } catch (err) { 
        console.error(err);
        process.exit(1)
    }
}

module.exports = connectDB;