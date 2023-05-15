const { Router } = require("express");
const { userValidator } = require("../config/validator");
const router = Router();
const userController = require("../controllers/userController");

router.post("/register", userValidator, userController.signUp);

router.post("/login", userController.signIn);

module.exports = router;
