const {Router} = require('express');
const controller = require('../controllers/controllers');
const authController = require('../controllers/authcontrollers');
const {	authenticate } = require('../middlewares/authentication');
const router = Router();
const User = ('../models/User');


//Add new product
router.post('/', authenticate, controller.newproduct);

//Get products
router.get('/',authenticate, controller.products);

//Get product
router.get('/:productId', authenticate, controller.product);

//Update product information
router.patch('/:productId', authenticate, controller.updateProduct);

//Delete product
router.delete('/:productId', authenticate, controller.deleteProduct);

module.exports = router;
