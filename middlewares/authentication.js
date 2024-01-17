const log = console.log;
const { decodeToken } = require('../services/jwtservice');
const adminToken = process.env["ADMINTOKEN"];



exports.authenticateAdmin = function(req, res, next) {
  //log(req.headers);
  // Check if there is an auth token,
  if (!req.headers.authorization) return res.status(403).json({message: 'Authorization header required'});
  
  const splitHeader = req.headers.authorization.split(' ');
  if (splitHeader[0] !== 'Bearer') return res.status(401).json({message: 'Authorization format is Bearer <token>'}); 

  const token = splitHeader[1];

  // Compare tokens
  if (token !== adminToken) {
    return res.status(401).json({message: 'Invalid authorization token. Please use the correct information.'});
  } else {
    next();
  } 
}

exports.authenticate = function(req, res, next) {
  //log(req.headers);
  // Check if there is an auth token,
  if (!req.headers.authorization) return res.status(403).json({message: 'Authorization header required'});
  
  const splitHeader = req.headers.authorization.split(' ');
  if (splitHeader[0] !== 'Bearer') return res.status(401).json({message: 'Authorization format is Bearer <token>'}); 

  const token = splitHeader[1];

  // Decode the token
  let decodedToken = decodeToken(token);
  if (!decodedToken) return res.status(401).json({message: 'Invalid authorization token. Please login with the correct information.'});
  //else if (decodeToken !=) {} 
  req.user = decodedToken;
  next(); 
}