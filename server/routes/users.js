require("../database");

const express = require("express");
const {
  emailValidation,
  passwordValidation,
  verifyToken,
} = require("../validators");
const { create, login, authenticate } = require("../controllers/");

const router = express.Router();

router.post("/register", emailValidation, passwordValidation, create);
router.post("/login", login);
router.get("/authenticate", verifyToken, authenticate);

module.exports = router;
