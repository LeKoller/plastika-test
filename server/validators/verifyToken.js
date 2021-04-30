module.exports = async (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader === "undefined") return res.sendStatus(403);

  const token = bearerHeader.split(" ")[1];
  req.token = token;

  return next();
};
