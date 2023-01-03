const { Router } = require("express");
const router = Router();
const { validatorRegister, validatorLogin } = require("../validators/auth");

const { registerController, loginController } = require("../controllers/auth.controller")

/**
 *  localhost:3001/api/auth/login
 * localhost:3001/api/auth/register
 */

router.post("/register", validatorRegister, registerController);

router.post("/login", validatorLogin, loginController);
/*
{
    "name": "Antonio",
    "age": "26",
    "email": "chochito9159@gmail.com",
    "password": "drakolin"
}
{
    "email": "chochitod9159@gmail.com",
    "password": "drakolin"
}

*/
module.exports = router;
