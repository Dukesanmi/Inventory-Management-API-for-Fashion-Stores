const log = console.log;
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { createToken, decodeToken } = require('../services/jwtservice');


//Sign up
module.exports.signup = async (req, res) => {
	const { name, email, password, mobile } = req.body;
	log(req.body);

	try {
		const user = await User.create({
			name,
			email, 
			password
		});

		log(user._id);

		const token = createToken(user._id);
		log(token);
		res.status(201).json({user: name, message: "User successfully created"});
	}
	catch(err) {
		log(err);
		res.status(400).json({ err });
	}
}

//Login
module.exports.login = async (req, res) => {
	const { email, password } = req.body;

	log(req.body);

	try {
		const user = await User.login(email, password);
		log(user._id);
		const token = createToken(user._id);
		res.status(200).json({ user: email, message: "Successfully logged in" });
	}
	catch (err){
		log(err);
		res.status(400).json({ err });
	}
}

//Edit user info (user function)
module.exports.updateUser= async (req, res) => {
	const { name, password } = req.body;
	const id = req.params.userId;
	var newpassword;
	try {
		if (req.body.password) {
			const salt = await bcrypt.genSalt(10);
			const hash = await bcrypt.hash(password, salt);
			newpassword = hash;
		}
		const updateUser = await User.findByIdAndUpdate(id, { name, newpassword });
		const savedUser = await updateUser.save(); 
		res.status(200).json({message: "User update successful", savedUser});
	} catch(err) {
		log(err);
		res.status(400).json({ err });
	}
}


// Admin functions
module.exports.findUsers = async (req, res)=> {
	try {
		const users = await User.find({}); 
		res.status(200).json({ users });
	} catch (err) {
		res.status(400).json({ err });
	}
}


//Delete user
module.exports.deleteUser = async (req, res)=> {
	const id = req.params.userId;
	try {
		const deleteUser = await User.findByIdAndDelete(id);
		res.status(200).json({message: "User has been successfully deleted"}); 
	} catch(err) {
		res.status(400).json({ err });
	}
}
