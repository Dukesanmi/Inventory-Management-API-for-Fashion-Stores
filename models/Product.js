const log = console.log;
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	category: {
		type: String,
		enum: {
			values: ['Clothing', 'Foot wears', 'Head wears', 'Accessories'],
			message: 'This does not fit any product category'
		},
		required: true
	},
	quantity : {
		type: Number,
		required: true
	},
	currency: {
		type: String, 
		enum: {
			values: ['NGN', 'USD', 'GBP', 'EUR', 'CAD'],
			message: 'Not an acceptable currency'
		},
		required: true
	},
	price: {
		type: Number, 
		required: true
	},
	store: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
});


const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;