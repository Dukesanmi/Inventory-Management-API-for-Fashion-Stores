const log = console.log;
const Product = require('../models/Product');
const User = require('../models/User');
const {decodeToken} = require('../services/jwtservice');

// New product
exports.newproduct = async (req, res) => {
 const { name, category, quantity, currency, price } = req.body;
 const token = req.headers.authorization.split(' ')[1];
 const decode = decodeToken(token);

  // Create new product
  try {
    const product = await new Product({
    	name: name,
      category: category,
      quantity: quantity,
      currency: currency,
      price: price,
      store: decode.id  
    });

    const savedProduct = await product.save();
    res.status(200).json({ savedProduct });
  } catch (err) {
    	log(err);
      throw err;
    	res.status(400).json({ err });
  }

}

//View products
module.exports.products = async (req, res) => {
  
  //Basic Search
  let conditions = {};
  //check req.query for filters
  if (req.query.name) {
    conditions.name = req.query.name
  }
  if (req.query.category) {
    conditions.category = req.query.category;
  }
  if (req.query.quantity) {
    conditions.quantity = req.query.quantity;
  }
  if (req.query.currency) {
    conditions.currency = req.query.currency;
  }
  if (req.query.price) {
    conditions.price = req.query.price;
  }

  try {
    const products = await Product.find(conditions);
    res.status(200).json({ products });
  } 
  catch(err) {
    res.status(400).json({ err });
  }
}

// Get product by productId
module.exports.product = async (req, res) => {
  const id = req.params.productId;
  try {
    const product = await Product.findById(id);
    res.status(200).json({ product });
  } 
  catch(err) {
    res.status(400).json({ err });
  }
}


//Update product
module.exports.updateProduct = async (req, res) => { 
  const { name, category, quantity, currency, price } = req.body;
  const id = req.params.productId;

  try {
    const product = await Product.findByIdAndUpdate(id, {name, category, quantity, currency, price});
    productSaved = product.save();
    res.status(200).json({ productSaved }); 
  }
  catch(err) {
    res.status(400).json({ err });
  }
}

//Delete product
module.exports.deleteProduct = async (req, res)=> {
  const id = req.params.id;
  try {
    const productDelete = await Product.findByIdAndDelete(id);
    res.status(200).json({success: "Product deleted successfully"});
  } catch(err) {
    log(err);
    res.status(400).json({ err });
  }
}


//Post sale product update

//Product restock update