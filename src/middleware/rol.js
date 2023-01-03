const { handleError } = require("../utils/hanldeError");
/**
 * Array con los roles permitidos
 * @param {*} rol
 */
const checkRol = (roles) => (req, res, next) => {
  try {
    const { user } = req;
    const rolesByUser = user.role;
    const checkValueRol = roles.some(
      (rolSingle) => rolesByUser.includes(rolSingle) //TODO true or false
    );
    if(!checkValueRol){
        handleError(res, "USER_NOT_PERMISSIONS", 403);
        return;
    }
    next();
  } catch (error) {
    handleError(res, "ERROR_PERIMISSION", 403);
  }
};

module.exports = checkRol;
