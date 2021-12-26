const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config({ path: "./config/.env"});

exports.createJWT = (email, userId, duration) => {
   const payload = {
      email,
      userId,
      duration
   };
   return jwt.sign(payload, process.env.TOKEN_SECRET, {
     expiresIn: duration,
   });
};