const { Router } = require("express");
const router = Router();
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem
} = require("../controllers/tracks.controller");

const { validatorCreateItem,  validatorGetItem  } = require("../validators/tracks")


//localhost/tracks/GET,POST,DELETE,PUT
/**
 * Obtiene items
 */
router.get("/", getItems);
/**
 * Obtiene item
 */
router.get("/:id", validatorGetItem, getItem);
/**
 * Crea un item
 */
router.post("/", validatorCreateItem, createItem);
/**
 *  Actualiza registro
 */
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);
/**
 *  Borrar item
 */
router.delete("/:id", validatorGetItem, deleteItem);
module.exports = router;/*
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
*/