var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config'); // get our config file
// middleware auth function

let verifyToken = (req, res, next) => {
  // check header or url parameters or post parameters for token
  var token = req.headers['authorization'];
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  if (token == "zNXT3yFA") {
    next();
  }
  else {
    return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  }

}

module.exports = verifyToken;