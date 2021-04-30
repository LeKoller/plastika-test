const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/users");

const JWT_SECRET = "sihoqhfqoehoheoq736@^#*&@susiags";

module.exports = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).lean();

    if (!user) {
      return res.sendStatus(404);
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { id: await user._id, email: user.email },
        JWT_SECRET
      );

      return res.json({ token: token });
    }
  } catch {
    res.sendStatus(422);
  }
};
