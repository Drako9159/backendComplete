const { verifyToken } = require("../utils/handleJwt");
const { handleError } = require("../utils/hanldeError");

async function authMiddleware(req, res, next) {
  try {
    if (!req.headers.authorization) {
      handleError(res, "NOT_TOKEN_PROVIDER", 401);
      return;
    }
    const token = req.headers.authorization.split(" ").pop(); //TODO Bearer
    const dataToken = verifyToken(token);
    if (!dataToken._id) {
      handleError(res, "ERROR_ID_TOKEN", 401);
      return;
    }
    next();
  } catch (error) {
    handleError(res, "NOT_SESSION", 401);
  }
}
module.exports = authMiddleware;
