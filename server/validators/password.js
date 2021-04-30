module.exports = async (req, res, next) => {
  const password = await req.body.password;

  if (password.length < 6 || password.length > 30) return res.sendStatus(422);

  return next();
};
