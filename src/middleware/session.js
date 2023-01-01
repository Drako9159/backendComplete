const { verifyToken } = require("../utils/handleJwt");
const { handleError } = require("../utils/hanldeError");
const { usersModel } = require("../models");
const getProperties = require("../utils/handlePropertiesEngine")
const propertiesKey = getProperties()


async function authMiddleware(req, res, next) {
  try {
    if (!req.headers.authorization) {
      handleError(res, "NOT_TOKEN_PROVIDER", 401);
      return;
    }
    const token = req.headers.authorization.split(" ").pop(); //TODO Bearer
    const dataToken = verifyToken(token);

    if(!dataToken){
      handleError(res, "NOT_PAYLOAD_DATA", 401);
      return;
    }


    //findById es de mongo
    //en comun findOne
    const query = {
      [propertiesKey.id]: dataToken[propertiesKey.id]
    }
    const user = await usersModel.findOne(query)
    

    req.user = user
  
    next();
  } catch (error) {
    handleError(res, "NOT_SESSION", 401);
  }
}


module.exports = authMiddleware;
