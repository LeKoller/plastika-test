const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/users");

const JWT_SECRET = "sihoqhfqoehoheoq736@^#*&@susiags";

module.exports = async (req, res) => {
  jwt.verify(req.token, JWT_SECRET, (error, authCredentials) => {
    if (error) {
      res.sendStatus(403);
    }

    res.json(authCredentials);
  });
};
