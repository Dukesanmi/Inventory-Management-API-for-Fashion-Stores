const log = console.log;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		unique:true,
		required: true
	},
	email: {
		type: String,
		unique:true,
		required: true
	},
	password: {
		type: String,
		required: [true, 'Please enter a password'],
		minlength: [6, 'Password length should be minimum of 6 characters']
	}
});

UserSchema.pre('save', async function(next) {
	const salt = await bcrypt.genSalt();
	this.password = await bcrypt.hash(this.password, salt);
	// console.log('user about to be created', this);
	next();
});

// Static method to login user
UserSchema.statics.login = async function(email, password) {
	const user = await this.findOne({ email });
	if (user) {
		const auth = await bcrypt.compare(password, user.password);
		if (auth) {
			log(`user logged in: ${user}`)
			return user;
		}
		throw Error('incorrect password');
	}
	throw Error('incorrect username');
}

const User = mongoose.model('User', UserSchema);

module.exports = User;