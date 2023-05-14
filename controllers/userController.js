const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const errorConfig = require("../config/errorConfig");
const { generateToken } = require("../utils/jwt");

const hash = parseInt(process.env.HASH_LENGTH);

class UserController {
  signUp = async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: "Registration error",
          message: errors.errors[0].msg,
        });
      }

      const { email, password, fullName } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(401).json(errorConfig.userExists);
      }

      const hashedPassword = await bcrypt.hash(password, hash);

      const newUser = new User({
        email,
        password: hashedPassword,
        fullName,
      });
      await newUser.save();

      res.status(201).json({
        success: true,
        message: "User successfully created",
      });
    } catch (e) {
      return res.status(404).json(e);
    }
  };

  signIn = async (req, res) => {
    try {
      const { email, password } = req.body;

      const candidate = await User.findOne({ email });

      if (!candidate) {
        return res.status(404).json(errorConfig.userNotFound);
      }

      const isMatch = bcrypt.compareSync(password, candidate.password);

      if (!isMatch) {
        return res.status(404).json(errorConfig.wrongPasswordError);
      }

      const token = generateToken(candidate._id);

      res.status(200).json({
        success: true,
        token,
      });
    } catch (e) {
      return res.status(404).json(e);
    }
  };
}

module.exports = new UserController();
