const { validate } = require("email-validator");

module.exports = async (req, res, next) => {
  const email = await req.body.email;

  if (validate(email)) return next();

  return res.sendStatus(422);
};
