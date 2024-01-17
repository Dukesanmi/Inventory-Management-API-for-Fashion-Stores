const log = console.log;
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
//const inventoryRoutes = require('./routes/routes');
const { checkUser } = require('./middlewares/authentication');
const date = new Date();
const PORT = process.env['PORT'] || 8000;

require('dotenv').config();

const app = express();



// Middlewares
app.use(express.static(__dirname + '/public'));
app.use(express.json());


// Database connection
connectDB();

// Routes
app.use('/api/products', require('./routes/routes'));
app.use('/api/users', require('./routes/authroutes'));

//App Listen
app.listen(PORT, log(`Server run on PORT ${PORT}, Date: ${date}`));