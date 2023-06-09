const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

const verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) return res.status(403).send({ message: "No token provided!" });

  try {
    const veryfy = await jwt.verify(token, config.secret, (err, decoded) => {
      if (err) return res.status(401).send({ message: "Unathorized!" });

      req.userId = decoded.id;
      req.userName = decoded.username;
      next();
    });
  } catch (error) {
    return res.status(400).send({ message: "Bad request!" });
  }
};

const authJwt = {
  verifyToken,
};

module.exports = authJwt;
