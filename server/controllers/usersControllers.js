const bcrypt = require("bcryptjs");
const { validate } = require("email-validator");
const jwt = require("jsonwebtoken");

const User = require("../models/users");

const JWT_SECRET = "sihoqhfqoehoheoq736@^#*&@susiags";

exports.create = async (req, res) => {
  const { email, password: plainTextPassword } = req.body;

  if (!validate(email)) {
    return res.status(422);
  }

  const password = await bcrypt.hash(plainTextPassword, 10);

  try {
    await User.create({ email, password });

    return res.json({ message: `created ${email} user` }).status(201);
  } catch (error) {
    console.log(error.message);
    return res.json(error);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).lean();

    if (!user) return res.status(404);

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { id: await user._id, email: user.email },
        JWT_SECRET
      );

      return res.json({ id: await user._id, email: user.email, token: token });
    }
  } catch {
    res.status(422);
  }
};
