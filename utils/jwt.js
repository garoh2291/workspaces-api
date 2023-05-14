const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;
const validDays = process.env.JWT_VALID_DAYS;

const generateToken = (id) => {
  const payload = {
    id,
  };

  return jwt.sign(payload, secret, { expiresIn: validDays });
};

module.exports = {
  generateToken,
};
