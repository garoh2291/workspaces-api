const { Router } = require("express");
const { userValidator } = require("../config/validator");
const router = Router();
const userController = require("../controllers/userController");

// Register new user
router.post("/register", userValidator, userController.signUp);

//Log in with existing user
router.post("/login", userController.signIn);

module.exports = router;
