const { check } = require("express-validator");

exports.userValidator = [
  check("email", "Email is wrong").trim().isEmail().normalizeEmail(),
  check("fullName", "Name is required").trim().isLength({ min: 3 }),
  check("password", "Password must be minimum 6 characters")
    .trim()
    .isLength({ min: 6, max: 12 }),
];
