const { Router } = require("express");
const router = Router();
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/tracks.controller");

const {
  validatorCreateItem,
  validatorGetItem,
} = require("../validators/tracks");
const authMiddleware = require("../middleware/session");
const checkRol = require("../middleware/rol");
//localhost/tracks/GET,POST,DELETE,PUT
/**
 * Obtiene items
 */
router.get("/", authMiddleware, getItems);
/**
 * Obtiene item
 */
router.get("/:id", authMiddleware, validatorGetItem, getItem);
/**
 * Crea un item
 */
router.post("/", authMiddleware, checkRol(["admin", "user"]), validatorCreateItem, createItem);
/**
 *  Actualiza registro
 */
router.put("/:id", authMiddleware, validatorGetItem, validatorCreateItem, updateItem);
/**
 *  Borrar item
 */
router.delete("/:id", authMiddleware, validatorGetItem, deleteItem);
module.exports = router; 
/*
const purple = {
  "name": "Drako",
  "album": "ultrainsint",
  "cover": "http://tttt.com",
  "artist": {
    "name": "Drakito",
    "nickname": "drako9159",
    "nationality": "MX"
  },
  "duration": {
    "start": 1,
    "end": 0
  },
  "mediaId": "63aa380190f5df3692e97a9a"
};

{
  "name": "Drako",
  "album": "ultrainsint",
  "cover": "http://tttt.com",
  "artist": {
    "name": "Drakito",
    "nickname": "drako9159",
    "nationality": "MX"
  },
  "duration": {
    "start": 1,
    "end": 0
  },
  "mediaId": "5"
}

63b286174c46916b03e61c76
*/
