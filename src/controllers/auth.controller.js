const { matchedData } = require("express-validator");
const { compare, encrypt } = require("../utils/handlePassword");
const { tokenSign } = require("../utils/handleJwt");
const { usersModel } = require("../models/index");
const { handleError } = require("../utils/hanldeError");
/**
 * Controller for register users
 * @param {*} req
 * @param {*} res
 */
async function registerController(req, res) {
  try {
    req = matchedData(req);
    const password = await encrypt(req.password);
    const body = { ...req, password };
    const dataUser = await usersModel.create(body);
    //para que no regrese la contraseña al crear
    dataUser.set("password", undefined, { strict: false });
    const data = {
      token: tokenSign(dataUser),
      user: dataUser,
    };
    res.send({ data });
  } catch (error) {
    handleError(res, "ERROR_REGISTER_USER", 403);
  }
}
/**
 * Conytoller for login users
 * @param {*} req
 * @param {*} res
 */
async function loginController(req, res) {
  try {
    req = matchedData(req);
    //TODO select para que sí traiga password
    const user = await usersModel
      .findOne({ email: req.email })
      //select es de mongo
      //.select("password name role email");
    if (!user) {
      handleError(res, "USER_NOT_EXISTS", 404);
      return;
    }
    const hashPassword = user.get("password");
    const check = await compare(req.password, hashPassword);
    if (!check) {
      handleError(res, "PASSWORD_INVALID", 401);
      return;
    }
    //TODO vuelve a ocultar el password
    //user.set("password", undefined, { strict: false });

    const data = {
      token: await tokenSign(user),
      user,
    };
    res.send({ data });
  } catch (error) {
    console.log(error)
    handleError(res, "ERROR_LOGIN_USER", 403);
  }
}
module.exports = { registerController, loginController };
