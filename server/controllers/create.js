const bcrypt = require("bcryptjs");
const User = require("../models/users");

module.exports = async (req, res) => {
  const { email, password: plainTextPassword } = req.body;
  const password = await bcrypt.hash(plainTextPassword, 10);

  try {
    await User.create({ email, password });

    return res.json({ message: `created ${email} user` }).status(201);
  } catch (error) {
    console.log(error.message);
    return res.json(error);
  }
};
