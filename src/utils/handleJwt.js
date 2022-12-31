const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * Pasa objeto del usuario
 * @param {*} user
 */
function tokenSign(user) {
  const sign = jwt.sign(
    {
      _id: user.id,
      role: user.role,
    },
    JWT_SECRET,
    {
      expiresIn: "2h",
    }
  );
  return sign;
}
/**
 * Verifica la validéz del token
 * @param {*} tokenJwt
 * @returns
 */
function verifyToken(tokenJwt) {
  try {
    return jwt.verify(tokenJwt, JWT_SECRET);
  } catch (error) {
    return null;
  }
}

module.exports = { tokenSign, verifyToken };
