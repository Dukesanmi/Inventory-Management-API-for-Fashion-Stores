const log = console.log;
const jwt = require('jsonwebtoken');
const maxAge = 3*24*60*60;

// Create Token
module.exports.createToken = (id) => {
	try {
		let token = jwt.sign({ id }, process.env['MYTOKEN'], {
			expiresIn: maxAge
		});
		return token;
	}
	catch(err) {
		throw err;
	}	
}


// Decode Token
module.exports.decodeToken = function(token) {
	try {
		let decodedToken = jwt.verify(token, process.env['MYTOKEN']);
		return decodedToken;
	}
	catch(err) {
		throw err;
	}
}
