const jwt = require('jsonwebtoken');
const config = require('../app/config');

function isAuthenticated(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
    jwt.verify(token, config.secretkey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }
      req.userId = decoded.id;
      next();
    });
  }

module.exports = {
    isAuthenticated
}