const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/users");

exports.create = require("./create");
exports.login = require("./login");
exports.authenticate = require("./authenticate");
