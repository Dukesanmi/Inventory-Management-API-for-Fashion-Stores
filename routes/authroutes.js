const {Router} = require('express');
const authController = require('../controllers/authcontrollers');
const {	authenticateAdmin, authenticate } = require('../middlewares/authentication');
const router = Router();
const User = ('../models/User');

//user signup
router.post('/', authController.signup);

//user login
router.post('/login', authController.login);

//edit user information
router.patch('/:userId', authenticate, authController.updateUser);

//admin user functions
router.get('/', authenticateAdmin, authController.findUsers);

router.delete('/:userId', authenticateAdmin, authController.deleteUser);

module.exports = router;