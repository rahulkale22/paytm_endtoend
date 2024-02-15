//const { JWT_SECRET } = require("./config");
const { secretKey} = require("../config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({});
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, secretKey);
          // The decoded object already contains the userId
          req.userId = decoded.userId;
          next();
  
      } catch(err) {
          // Handle token verification error
          console.error("Token verification error:", err);
          return res.status(403).json({});
      }
  };
        


module.exports = {
    authMiddleware
}