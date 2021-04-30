require("../database");

const express = require("express");
const { emailValidation, passwordValidation } = require("../validators");
const { create, login } = require("../controllers/usersControllers");

const router = express.Router();

router.post("/register", emailValidation, passwordValidation, create);
router.post("/login", login);

module.exports = router;
